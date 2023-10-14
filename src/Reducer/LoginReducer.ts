// import { ActionType, createReducer} from 'typesafe-actions';


const SIGN_IN_USER = 'Sign/SIGN_IN' as const;
const SIGN_OUT_USER = 'Sign/SIGN_OUT' as const;


//User가 Sign을 할 때 파라미터에 넣을 Data의 Type
export interface UserSign {
  ID:string,
  accessToken:string,
}

//SignIn이 종료되었을 때 나오는 Return Tyoe에 대한 정의
export const SignInRet = {
  SUCCESS : 1,
  FAIL : 2,
  ALREADY_SIGNIN : 3,
}

type SignAction =
 | ReturnType<typeof SignInUser>
 | ReturnType<typeof SignOutUser>



//실제 SignIn Action을 만드는 Action 생성함수.
//type : SIGN_IN_USER, Value : UserSign 객체를 Return 한다.
//여기서 return 된 Object를 Reducder에 넣으면 그렇게 동작한다.

export const SignInUser = (user:UserSign) => ({
    type:SIGN_IN_USER,
    user
});

export const SignOutUser = (accessToken:string) => ({
    type:SIGN_OUT_USER,

});

interface UserState {
  curSignIn:Boolean,
  ID : String,
  signInTime : Date,
  accessToken: string,
  status: number,
};

//reducer에 아무것도 안들어왔을때 초기화되는 값?
const initialState:UserState = {
  curSignIn:false,
  ID:"",
  signInTime : new Date(),
  accessToken:"",
  status:SignInRet.FAIL,
}

export default function SignUser(state = initialState, action:SignAction):UserState {
  console.log("ACTION");
  console.log(action);
  console.log("STATE");
  console.log(state);

    switch (action.type) {
      case SIGN_IN_USER:
        console.log("SIGN_IN_USER");
        //이미 로그인 되어있음
        if(state.curSignIn == true) {
          return {
            ...state,
            status:SignInRet.ALREADY_SIGNIN,
          };
        }
        
        //로그인 되어있지 않을 때
        console.log("NOW : LOGOUT");
        return {
          ...state,
          ID : action.user.ID,
          accessToken : action.user.accessToken,
          curSignIn : true,
          signInTime : new Date(),
          status:SignInRet.SUCCESS
        }
        
      case SIGN_OUT_USER:
        return {
          ...state,
          curSignIn : false,
          
        }
      
      default:
        return state;
    }
  }