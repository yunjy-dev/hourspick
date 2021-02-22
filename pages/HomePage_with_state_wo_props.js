import React, {setState, useState, useEffect}from 'react';
import main from '../assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import data from '../data.json';
import Card from '../components/Card';

const HomePage = () => {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석

  //초기화
  const [tipState, setTipState] = useState([]);
  const [cateState,setCateState] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
        //꿀팁 데이터로 모두 초기화 준비
        let tipState = data.tip;
        setTipState(tipState);
        setCateState(tipState);
        setLoading(false);
        console.log(tipState);

    },1000)
  },[])
  

  //이벤트
  const checkCateState = (category) => {
    if(category == "전체"){
        //전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
        setCateState(tipState);
    }else{
        setCateState(tipState.filter((keys, idx)=>{
            // console.log(idx, keys.category);
            return keys.category == category;
        }))
        // console.log(tipState);
    }
  }

  // let tip = data.tip;
	let todayWeather = 10 + 17;
  let todayCondition = "흐림"
  return (
    /*
      return 구문 안에서는 {슬래시 + * 방식으로 주석
    */
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
			 <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
      <Image style={styles.mainImage} source={main}/>
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
        <TouchableOpacity style={styles.middleButton00} onPress={()=>{checkCateState('전체')}}><Text style={styles.middleButtonText}>전체</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton01} onPress={()=>{checkCateState('생활')}}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02} onPress={()=>{checkCateState('재테크')}}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03} onPress={()=>{checkCateState('반려견')}}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04} onPress={()=>{checkCateState('찜')}}><Text style={styles.middleButtonText}>찜</Text></TouchableOpacity>
      </ScrollView>

      
      <View style={styles.cardContainer}>
         {/* 하나의 카드 영역을 나타내는 View */}
         {
          cateState.map((content,i)=>{
            return (<Card content={content} key={i}/>)
          })
        }
        
      </View>
   
    </ScrollView>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: '#fff',
  },
  title: {
    //폰트 사이즈
    fontSize: 20,
    //폰트 두께
    fontWeight: '700',
    //위 공간으로 부터 이격
    marginTop:50,
    //왼쪽 공간으로 부터 이격
    marginLeft:20
  },
 weather:{
    alignSelf:"flex-end",
    paddingRight:20
  },
  mainImage: {
    //컨텐츠의 넓이 값
    width:'90%',
    //컨텐츠의 높이 값
    height:200,
    //컨텐츠의 모서리 구부리기
    borderRadius:10,
    marginTop:20,
    //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
    //각 속성의 값들은 공식문서에 고대로~ 나와 있음
    alignSelf:"center"
  },
  middleContainer:{
    marginTop:20,
    marginLeft:10,
    height:60
  },
  middleButtonText: {
    color:"#fff",
    fontWeight:"700",
    //텍스트의 현재 위치에서의 정렬 
    textAlign:"center"
  },
  middleButton00: {    width:100,    height:50,    padding:15,    backgroundColor:"#fdE40A",    borderColor:"deeppink",    borderRadius:15,    margin:7  },
  middleButton01: {    width:100,    height:50,    padding:15,    backgroundColor:"#fdc453",    borderColor:"deeppink",    borderRadius:15,    margin:7  },
  middleButton02: {    width:100,    height:50,    padding:15,    backgroundColor:"#fe8d6f",    borderRadius:15,    margin:7  },
  middleButton03: {    width:100,    height:50,    padding:15,    backgroundColor:"#9adbc5",    borderRadius:15,    margin:7  },
  middleButton04: {    width:100,    height:50,    padding:15,    backgroundColor:"#f886a8",    borderRadius:15,    margin:7  },
  
  cardContainer: {
    marginTop:10,
    marginLeft:10
  },


});


