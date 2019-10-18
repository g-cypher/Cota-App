import DashDetailBox from '../models/dashDetailBox';

const DASHDETAILS = [
  new DashDetailBox(
    'd1',
    '<MaterialCommunityIcons name="package-variant" color="#73a2d7" size={30} />' ,
    'Commodity',
    'Apples'
  ),
  new DashDetailBox(
    'd2',
    '<MaterialIcons name="person-pin" color="#73a2d7" size={30} />',
    'Appointment',
    'Yes'
  ),
  new DashDetailBox(
    'd3',
    '<MaterialCommunityIcons name="ruler" color="#73a2d7" size={30} />',
    'Dimensions',
    '30x10x5'
  ),
  new DashDetailBox(
    'd4',
    '<MaterialCommunityIcons name="weight" color="#73a2d7" size={30} />',
    'Dimensions',
    '30x10x5'
  ),
  new DashDetailBox(
    'd5',
    '<MaterialIcons name="confirmation-number" color="#73a2d7" size={30} />',
    'PU',
    '12345'
  ),
  new DashDetailBox(
    'd6',
    '<MaterialIcons name="confirmation-number" color="#73a2d7" size={30} />',
    'P0#',
    '123456789'
  ),
]

export default DASHDETAILS; 