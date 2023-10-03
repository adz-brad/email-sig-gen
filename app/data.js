export const templates = [
    {
        id: 1,
        image: '/template-1-img.png'
    },
    {
        id: 2,
        image: '/template-1-img.png'
    },
    {
        id: 3,
        image: '/template-1-img.png'
    },
    {
        id: 4,
        image: '/template-1-img.png'
    },
    {
        id: 5,
        image: '/template-1-img.png'
    },
]

export const buttons = [
    {
        name: 'Template',
        svg: <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M5 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7Zm9 0H6v2h8V7Zm-2 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2Zm0 1h2v1h-2v-1Zm-7-.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Z"/></svg>
    },
    {
        name: "Details",
        svg: <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M20.063 8.445a3.218 3.218 0 0 1-.002 4.551l-7.123 7.112a2.251 2.251 0 0 1-.943.562l-4.293 1.29a1 1 0 0 1-1.24-1.264l1.362-4.228c.11-.34.3-.65.552-.903l7.133-7.121a3.22 3.22 0 0 1 4.554.002Zm-3.494 1.06l-7.133 7.12a.75.75 0 0 0-.184.301l-1.07 3.323l3.382-1.015a.749.749 0 0 0 .314-.188L19 11.936a1.718 1.718 0 1 0-2.431-2.432ZM8.15 2.37l.05.105l3.253 8.249l-1.157 1.155L9.556 10H5.443l-.995 2.52a.75.75 0 0 1-.876.454l-.098-.031a.75.75 0 0 1-.452-.876l.03-.098l3.754-9.495a.75.75 0 0 1 1.345-.104Zm-.648 2.422L6.036 8.5h2.928L7.503 4.792Z"/></svg>
    },
    {
        name: "Style",
        svg: <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9c-11.5-1.9-15.9-4-22.6-10c-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2c-34.2-30.1-80.1-45-127.8-45c-55.7 0-113.9 20.3-158.8 60.1c-83.5 73.8-83.5 194.7 0 268.5c41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4c14.4-12.7 11.99-36.6.1-47.7Z"/><circle cx="144" cy="208" r="32" fill="currentColor"/><circle cx="152" cy="311" r="32" fill="currentColor"/><circle cx="224" cy="144" r="32" fill="currentColor"/><circle cx="256" cy="367" r="48" fill="currentColor"/><circle cx="328" cy="144" r="32" fill="currentColor"/></svg>
    },
    {
        name: "Customize",
        svg: <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16"/><rect width="400" height="336" x="96" y="128" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" rx="45.99" ry="45.99"/><ellipse cx="372.92" cy="219.64" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" rx="30.77" ry="30.55"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M342.15 372.17L255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91"/></svg>
    },
]

export const fonts = [
    'Arial',
    'Courier New',
    'Georgia',
    'Lucida Sans Unicode',
    'Tahoma',
    'Times New Roman',
    'Trebuchet MS',
    'Verdana'
]

export const sizes = [
  {
    value: 1,
    display: 'Small'
  },
  {
    value: 2,
    display: 'Medium'
  },
  {
    value: 3,
    display: 'Large'
  }
]

export const details = [
    {
      title: 'Enter Your Details',
      fields: [
        {
          name: 'First Name',
          placeholder: 'John',
          hasMultiple: false,
          fields: []
        },
        {
          name:'Last Name',
          placeholder: 'Smith',
          hasMultiple: false,
          fields: []
        },
        {
          name:'Job Title',
          placeholder: 'Real Estate Agent',
          hasMultiple: false,
          fields: []
        },
        {
          name:'Department',
          placeholder: 'Sales',
          hasMultiple: false,
          fields: []
        },
        {
          name:'Company Name',
          placeholder: 'Your Agency',
          hasMultiple: false,
          fields: []
        },
        {
          name:'Office Phone',
          placeholder: '111 222 3333',
          hasMultiple: false,
          fields: []
        },
        {
          name:'Mobile Phone',
          placeholder: '111 222 3333',
          hasMultiple: false,
          fields: []
        },
        {
          name:'Website',
          placeholder: 'www.youragency.com',
          hasMultiple: false,
          fields: []
        },
        {
          name:'Email',
          placeholder: 'john@youragency.com',
          hasMultiple: false,
          fields: []
        },
        {
          name:'Address',
          placeholder: null,
          hasMultiple: true,
          fields: [
            {
              name:'Address Line 1',
              placeholder: 'Address Line 1',
            },
            {
              name:'Address Line 2',
              placeholder: 'Address Line 2',
            },
            {
              name:'Address Line 3',
              placeholder: 'Address Line 3',
            },
            {
              name:'Address Line 4',
              placeholder: 'Address Line 4',
            }
          ]
        }
      ]
    }
  ]

  export const social = [
    {
      title: 'Social Links',
      fields: [
        {
          name: 'Facebook',
          placeholder: 'Facebook URL',
          hasMultiple: false,
          fields: []
        },
        {
          name: 'X',
          placeholder: 'X URL',
          hasMultiple: false,
          fields: []
        },
        {
          name: 'LinkedIn',
          placeholder: 'LinkedIn URL',
          hasMultiple: false,
          fields: []
        },
        {
          name: 'Instagram',
          placeholder: 'Instagram URL',
          hasMultiple: false,
          fields: []
        },
      ]
    }
  ]

  export const images = [
    {
      title: 'Signature Images',
      fields: [
        {
          name: 'Profile Picture',
          placeholder: 'https://www.example.com/profile-pic.jpg',
          hasMultiple: false,
          fields: []
        },
        {
          name: 'Company Logo',
          placeholder: 'https://www.example.com/company-logo.jpg',
          hasMultiple: false,
          fields: []
        },
      ]
    }
  ]

  export const cta = [
    {
      title: 'Custom CTA',
      fields: [
        {
          name: 'Custom CTA Copy',
          placeholder: 'Find Out more',
          hasMultiple: false,
          fields: []
        },
        {
          name: 'Custom CTA URL',
          placeholder: 'www.yourwebsite.com',
          hasMultiple: false,
          fields: []
        },
      ]
    }
  ]