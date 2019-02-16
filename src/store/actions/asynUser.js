import * as types from "../types";

const asynUser = ({url,username,password})=>(dispatch,getState)=>{
    dispatch({type:types.VIEW_LOADING,payload:true});
    return fetch(
            url+`?username=${username}&password=${password}`,{
                method:"get",
                credentials:"include"
                // body:JSON.stringify({username:username,password:password}),
                // headers:{"Content-type":"application/x-www-form-urlencoded"},
            //     headers: {
            //     'Accept': 'application/json',
            //     'content-type': 'application/x-www-form-urlencoded;text/html;charset:utf-8;'
            // },
        }).then(
            res=> res.json()
        ).then(
            data=>{
                console.log(data)
                if(data.error==0){
                    dispatch({type:types.VIEW_LOADING,payload:false});
                    dispatch({type:types.CHECK_USER,payload:{username:username,password:password,auth:true}});
                    return true
                }else if(data.error==1){
                    alert("密码输入错误")
                    dispatch({type:types.VIEW_LOADING,payload:false});
                    dispatch({type:types.CHECK_USER,payload:{username:username,password:password,auth:false}});
                    return false
                }else if(data.error == 2){
                    alert("改手机未注册请求注册")
                    dispatch({type:types.VIEW_LOADING,payload:false});
                    dispatch({type:types.CHECK_USER,payload:{username:username,password:password,auth:false}});
                    return false
                }else if(data.error==3){
                    dispatch({type:types.VIEW_LOADING,payload:false});
                    dispatch({type:types.CHECK_USER,payload:{username:username,password:password,auth:true}});
                    return true
                }else if(data.error==4){
                    alert("改手机已注册请去登陆")
                    dispatch({type:types.VIEW_LOADING,payload:false});
                    dispatch({type:types.CHECK_USER,payload:{username:username,password:password,auth:false}});
                    return false
                }


            }
        )
}

export default asynUser