const initialState = {
  hospitalList: [],
  doctorList: [],
  bloodGroupList: [],
};

const handle = (state = initialState, action) => {
  switch (action.type) {
    case 'hospital_list':
      return {
        ...state,
        hospitalList: action.payload,
      };

    case 'doctor_list':
      return {
        ...state,
        doctorList: action.payload,
      };

    case 'bloodgroup_list':
      return {
        ...state,
        bloodGroupList: action.payload,
      };

    default:
      return state;
  }
};

export default handle;