import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['width'],
  width: 200,
  height: 60,
  fillPrimary: "#000000",
  fillSecondary: "#FF0000",
  fillBg: null,
});
