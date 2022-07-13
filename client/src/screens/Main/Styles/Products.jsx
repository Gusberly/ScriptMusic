import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    wrapper: {
        height: "100%",
    },
    container: {
        height: "100%",
        backgroundColor: "#F9F9F9",
    },
    containerNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    
    },
    categorieInfo:{
        backgroundColor: "#000000",
        height: 25,
    },
    categorieInfoText:{
        letterSpacing: 6,
        textAlign:'center',
        color: 'white',
        fontSize:22,
    },  
    textNav: {
        fontSize: 20,
        letterSpacing: 6,
    },
    input: {
        backgroundColor: "#fff6e8",
        borderRadius: 100,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 0,
        padding: 10,
        width: 220,
        height:40,
        letterSpacing: 2,
    },
    containerNoProducts:{
        marginBottom:40,
        alignItems: 'center',
        paddingTop: 100,
    },
    notProducts:{
        fontSize: 20,
        letterSpacing: 2,
        color: "#DD8643",
    }
})

export default styles