import {  StyleSheet,Text, View, Image } from 'react-native';


  
  const TaskTile = ()=>{
    return (
        <View style={styles.tileContainer}>
        <View style={styles.taskTile}>
          <View style={styles.taskRow}>
            <View style={styles.taskTileColText}>
              <Text style={styles.taskInnerText}>Unit 4 Part 1</Text>
              <View style={styles.taskDate}>
              <Image style={styles.dateIcon} source={require("../assets/date-icon.png")}/>
                <Text style={styles.taskInnerTextSub}>November 15th, 2022</Text>
              </View>
            </View>
            <View style={styles.taskTileColIcon}>
              <Image style={styles.checkIcon} source={require("../assets/fluent-emoji-high-contrast_check-mark.png")}/>
            </View>
        </View>
      </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    tileContainer: {
        flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
          margin:  100

      },
      taskTile: {
        width: 342,
        height: 92,

        borderRadius: 10,
        backgroundColor: '#FFF',
        position: "absolute",
        boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    }, 
     
        taskInnerText: {
        // fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: 23,
        marginLeft: 20,
        marginTop: 20,
      },
      taskInnerTextSub: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 11,
        lineHeight: 23,
        marginLeft: 5,
        // marginBottom: 15,
        color: "rgba(51, 51, 51, 0.75)"
      },
      taskTileColText:{
        flexDirection: 'column',
      },
      dateIcon:{
        marginTop: 5
      },
      taskDate:{
        marginLeft: 20,
        flexDirection: "row"
      },
      taskTileColIcon:{
        flexDirection: 'column',
        flex: 1,
        paddingTop:30,
        paddingLeft:100,
      },
      taskRow:{
        flexDirection: "row",
        flex: 1
    
      }
    })
  export default TaskTile
  
 