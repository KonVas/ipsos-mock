import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
    pages: [
      { url: 'imports/website/demo.html' }
    ],
  });