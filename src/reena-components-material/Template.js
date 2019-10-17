import React from 'react';
import {Component} from 'react';
import Canvas from './Canvas';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import '../CSS/Template.css'


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
  }));


const Template = (props) => {

    const classes = useStyles();
    const canvasjsx = props.canvases.map((canvasObj) => {
        return (<Canvas 
            selected = {canvasObj.selected} 
            height = {canvasObj.height} 
            width = {canvasObj.width} 
            border = {canvasObj.border} 
            color = {canvasObj.color} 
            radius = {canvasObj.radius} 
            margin = {canvasObj.margin} 
            url= {canvasObj.url}
            key={canvasObj.id} 
            clicked={()=>{props.clicked(canvasObj.id)}}/>)
        });
    
        const OldTemplate = () => {
            return(<div className="templateHolder">  
            <div className="container" style={{backgroundColor: "#086f54"}}>
                <div className="firstRow">
                    {canvasjsx[0]} 
                    {canvasjsx[1]}
                </div>
                <div>
                    <div>
                        <div className="column1">
                            <div>
                                <div>
                                    <div>{canvasjsx[2]}</div>
                                    <div>{canvasjsx[3]}</div>
                                </div>
                                <div>
                                    <div>{canvasjsx[4]}</div>
                                    <div>{canvasjsx[5]}</div>
                                </div>
                            </div>
                            <div>{canvasjsx[6]}</div>
                        </div>
                        <div className="column2">
                            <div>{canvasjsx[7]}</div>
                            <div>{canvasjsx[8]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
        }

        return (

            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                {props.canvases.map((canvasObj) => {
        return (<Canvas 
            selected = {canvasObj.selected} 
            height = {canvasObj.height} 
            width = {canvasObj.width} 
            border = {canvasObj.border} 
            color = {canvasObj.color} 
            radius = {canvasObj.radius} 
            margin = {canvasObj.margin} 
            url= {canvasObj.url}
            key={canvasObj.id} 
            clicked={()=>{props.clicked(canvasObj.id)}}/>)
        })}
            </GridList>
        )


}

const matchStateToProps = (state) =>{
    console.log(state)
    return {canvases: state.can.canvases}      
}

const matchDispatchToProps = (dispatch) => {
    return {
        clicked: (canvasId)=>dispatch({type:'SELECT_CANVAS', canvasId}),
    }
}


export default connect(matchStateToProps, matchDispatchToProps)(Template);