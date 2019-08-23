
const AUTH = {
  _: 'auth',
  LOGIN: 'auth_login',
  SIGNUP: 'auth_signup',
  FORGOT_PASSWORD: 'auth_forgot_password',
  PHONE_ENTER: 'auth_phone_enter',
  VERIFY_CODE: 'auth_verify_code'
}
const HOME = {
  _ : 'home',
  SEARCH_ADVANCE : 'home_search_advance'
}
const PROFILE = {
  _: 'profile',
  UPDATE_INFOR: 'profile_update_infor',
  FRIENDS: 'friends',
  HISTORY: 'history',
  SETTING: 'setting'
}
const WALL = {
  _: 'user_wall'
}
const POST = {
  _: 'post'
}
const NEW_FEED = {
  _: 'new_feed'
}
const INVITE = {
  _ :'invite',
  CREATE : 'invite_create',
  RECEIVED : 'invite_received',
  VIEW_DETAIL : 'invite_detail'
}
const ENJOGER = {
  _ : 'enjoger',
  CREATE : 'enjoger_create',
  SUGGEST : 'enjoger_suggest',
  MATCH : 'enjoger_match'
}
const LOCATION = {
  _ : 'location',
  DETAIL : 'detail'
}
export const TABS = {
  APP_LOADING: 'app_loading',
  MAIN: HOME._,
  HOME,//TAB 1
  PROFILE,//TAB 2
  NEW_FEED,// TAB 3
  INVITE,// TAB 4
  ENJOGER,// TAB 5
  //specify tab
  AUTH,
  WALL,
  POST,
  LOCATION,
}