// install plugin to Framework7

var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
 // Force md theme for both Android and iOS 
  theme: 'md',
  // App id
  id: 'com.myapp.test',
  picker: {
    rotateEffect: true,
    openIn: 'popover',
  },
  // Add default routes
  routes: [
    {
      name: 'register',
      path: '/register/',
      url: './html/register.html',
    },
    {
      name: 'teachers',
      path: '/teachers/',
      url: './html/teachers.html',
    },
    {
      name: 'schedule',
      path: '/schedule/',
      url: './html/schedule.html',
    },
    {
      name: 'faq',
      path: '/faq/',
      url: './html/faq.html',
    },
    {
      name: 'home',
      path: '/home/',
      url: 'index.html',
    },
   

  ],
  // ... other parameters
  pushState : true,
  
});


// Dom7 
var $$ = Dom7;

// Init/Create main view
var mainView = app.views.create('.view-main', {
url: '/',
domCache: true,
});


// Do something here when page loaded and initialized


