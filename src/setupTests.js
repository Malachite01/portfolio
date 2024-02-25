import 'intersection-observer';

window.matchMedia = window.matchMedia || function() {
  return {
     matches : false,
     addListener : function() {},
     removeListener: function() {}
  };
};