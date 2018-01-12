
export const TYPE_COURSE_SEARCH = 'TYPE_COURSE_SEARCH';
export function typeCourseSearch(text) {
  return {
    type: TYPE_COURSE_SEARCH,
    text
  };
}


export const UPDATE_COURSES = 'UPDATE_COURSES';
export function updateCourses(courses) {
  return {
    type: UPDATE_COURSES,
    courses
  };
}

export const SWITCH_MAIN_PANEL_MODE = 'SWITCH_MAIN_PANEL_MODE';
export function switchMainPanelMode(mode) {
  return {
    type: SWITCH_MAIN_PANEL_MODE,
    mode
  };
}

export const ADD_COURSE = 'ADD_COURSE';
export function addCourse(courseId) {
  return {
    type: ADD_COURSE,
    courseId
  };
}

export const REMOVE_COURSE = 'REMOVE_COURSE';
export function removeCourse(courseId) {
  return {
    type: REMOVE_COURSE,
    courseId
  };
}

export const REORDER_COURSE = 'REORDER_COURSE';
export function reorderCourse(oldIndex, newIndex) {
  return {
    type: REORDER_COURSE,
    oldIndex,
    newIndex
  };
}

export const MainPanelMode = {
  COURSE_SEARCH: 'COURSE_SEARCH',
  SCHEDULE: 'SCHEDULE'
};