export const createEvent = (evnt) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firestore.collection('events').add({
        ...evnt,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        studentClass: profile.studentClass.value,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_EVENT_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_EVENT_ERROR' }, err);
      });
    }
  };