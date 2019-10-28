import { makeStyles } from '@material-ui/core/styles';

const userStyles = makeStyles(theme => ({
    page: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: "5rem",
        padding: theme.spacing(3),
    },
    card: {
        minWidth: "50vw",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }

}));


export default userStyles;