import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const projectcodes = [
  {
    id: 'Project Code# 1',
    firstName: 'Project Code# 1',
    lastName: ''
  },
  {
    id: 'Project Code# 2',
    firstName: 'Project Code# 2',
    lastName: ''
  },
  {
    id: 'Project Code# 3',
    firstName: 'Project Code# 3',
    lastName: ''
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (projectcode) => {
  return projectcode.firstName.toLowerCase() + '-' + projectcode.lastName.toLowerCase();
};

class ProjectcodeApi {
  static getAllProjectCodes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], projectcodes));
      }, delay);
    });
  }

  static saveProjectcode(projectcode) {
	projectcode = Object.assign({}, projectcode); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minprojectcodeNameLength = 3;
        if (projectcode.firstName.length < minprojectcodeNameLength) {
          reject(`Project Code must be at least ${minprojectcodeNameLength} characters.`);
        }

        if (projectcode.lastName.length < minprojectcodeNameLength) {
          reject(`Description must be at least ${minprojectcodeNameLength} characters.`);
        }

        if (projectcode.id) {
          const existingProjectcodeIndex = projectcode.findIndex(a => a.id == projectcode.id);
          projectcodes.splice(existingProjectcodeIndex, 1, projectcode);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          projectcode.id = generateId(projectcode);
          projectcodes.push(projectcode);
        }

        resolve(projectcode);
      }, delay);
    });
  }

  static deleteProjectcode(projectcodeId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfprojectcodeToDelete = projectcodes.findIndex(projectcode => {
          projectcode.id == projectcodeId;
        });
        projectcodes.splice(indexOfprojectcodeToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ProjectcodeApi;
