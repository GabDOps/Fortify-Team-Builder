// This file contains custom directives for the application.

Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus();
  }
});

Vue.directive('tooltip', {
  bind(el, binding) {
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.innerText = binding.value;
    el.appendChild(tooltip);
    
    el.addEventListener('mouseenter', () => {
      tooltip.style.display = 'block';
    });
    
    el.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  },
  unbind(el) {
    const tooltip = el.querySelector('.tooltip');
    if (tooltip) {
      el.removeChild(tooltip);
    }
  }
});