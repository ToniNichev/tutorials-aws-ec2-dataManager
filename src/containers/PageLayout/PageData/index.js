export default {
  '/sign-in' : {
    template: "Html",    
    layout: [ 
      {
        span: 12,
        components:[
          {
            name: "SignIn",
            props: {}
          }
        ] 
      }         
    ]    
  },
  '/sign-in-iframe' : {
    template: "Html",    
    layout: [ 
      {
        span: 12,
        components:[
          {
            name: "SignInIframe",
            props: {}
          }
        ] 
      }         
    ]    
  },
  '/sign-in-iframe-callback' : {
    template: "Html",    
    layout: [ 
      {
        span: 12,
        components:[
          {
            name: "SignInIframeCallback",
            props: {}
          }
        ] 
      }         
    ]    
  },  
  '/about' : {
    template: "Html",    
    layout: [ 
      {
        span: 12,
        components: [
          {
            name: "Header",
            props: {}
          }
        ]
      },
      {
        span: 12,
        components:[
          {
            name: "About",
            props: {}
          }
        ] 
      }         
    ]    
  },
  '/diseases' : {
    template: "Html",              
    layout: [ 
      {
        span: 12,
        components: [
          {
            name: "Header",
            props: {}
          }
        ]
      },
      {
        span: 12,
        components:[
          {
            name: "Diseases",
            props: {}
          }
        ] 
      },        
    ]
  },
  '/authenticate/facebook' : {
    template: "Html",              
    layout: [ 
      {
        span: 12,
        components: [
          {
            name: "Header",
            props: {}
          }
        ]
      },
      {
        span: 12,
        components:[
          {
            name: "AuthenticateFacebook",
            props: {}
          }
        ] 
      },        
    ]
  },  
  '/settings' : {
    template: "Html",    
    layout: [ 
      {
        span: 12,        
        components: [
          {
            name: "Header",
            props: {}
          }
        ]
      },
      {
        span: 12,
        components:[
          {
            name: "Setup",
            props: {}
          }
        ] 
      },        
    ]
  },
  '/other-template' : {
    template: "OtherHtml",      
    layout: [ 
      {
        span: 12,
        components:[
          {
            name: "Greetings",
            props: {}
          }
        ] 
      },        
    ]
}    
}
