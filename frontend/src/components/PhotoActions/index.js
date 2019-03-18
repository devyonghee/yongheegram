import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoAction } from "redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProp) => {
  return {
    handleHeartClick: () => {
      if (ownProp.isLiked) {
        dispatch(photoAction.unlikePhoto(ownProp.photoId));
      } else {
        dispatch(photoAction.likePhoto(ownProp.photoId));
      }
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
