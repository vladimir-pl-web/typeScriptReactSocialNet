import { RootStateType } from './../../redux/reduxStore';
import { connect } from 'react-redux'
import MyPosts from './MyPosts'
import { onInputValueAction, onInputValueActionType, onPostAddedAction, onPostAddedActionType, } from "../../redux/actions/myPosts";
import { newPostTextType, postListType } from '../../redux/reducers/profile';


type MapStateType = {
  list: postListType
  msgText: newPostTextType
}
type MapDispatchType = {
  onPostAddedAction: () => onPostAddedActionType
  onInputValueAction: (value:string) => onInputValueActionType
}
let mapStateToProps = (state:RootStateType):MapStateType => {
  return {
    list: state.profile.postList,
    msgText: state.profile.newPostText
  };
}

const MyPostsContainer = connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, {onPostAddedAction, onInputValueAction})(MyPosts)
export default  MyPostsContainer