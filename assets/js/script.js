// Loader
window.onload = function () {
  // setTimeout(function () {
    document.getElementById('loader').style.display = 'none';
//   }, 1000);
 }


// Sidebar
let sidebarToggle = document.getElementById('sidebar-toggle');
let sidebar = document.querySelector("#sidebar");
let content = document.getElementById('content');

// sidebarToggle.addEventListener('click', () => {
//   // الحصول على العرض الفعلي للشريط الجانبي
//   let sidebarWidth = window.getComputedStyle(sidebar).width;
//   if(sidebarWidth === '250px') {
//     sidebar.style.width = 0;
//     content.style.marginRight = 0;
//   } else {
//     sidebar.style.width = '250px';
//     content.style.marginRight = '250px';
//   }
// });

sidebarToggle.addEventListener('click', () => {
  let sidebarRight = window.getComputedStyle(sidebar).right;

  if(window.innerWidth > 767) {
    // لأجهزة الحاسوب يتم ازاحة المحتوى
    if (sidebarRight === '0px' ) {
      sidebar.style.right = '-250px';
      content.style.marginRight = '0';
    } else {
      sidebar.style.right = '0';
      content.style.marginRight = '250px';
    }
  } else {
    // للجوال لا يتم ازاحة المحتوى، فقط يظهر الشريط فوقه
    if (sidebarRight === '0px' ) {
      sidebar.style.right = '-250px';
    } else {
      sidebar.style.right = '0';
    }
  }
});

// Header Icons

let messagesContainer = document.querySelector('.messages-container');
let messagesArea = document.querySelector('.messages-area');

messagesContainer.addEventListener('click', function() {
  messagesArea.style.display = messagesArea.style.display === 'block'? 'none' : 'block';
  notificationArea.style.display = 'none';
  avatarArea.style.display = 'none';
});

let notificationContainer = document.querySelector('#notification-container');
let notificationArea = document.querySelector('#notification-area');

notificationContainer.addEventListener('click', function() {
  notificationArea.style.display = notificationArea.style.display === 'block'? 'none' : 'block';
  messagesArea.style.display = 'none';
  avatarArea.style.display = 'none';
});

let avatar = document.querySelector('.avatar');
let avatarArea = document.querySelector('#avatar-area');

avatar.addEventListener('click', function() {
  avatarArea.style.display = avatarArea.style.display === 'block'? 'none' : 'block';
  messagesArea.style.display = 'none';
  notificationArea.style.display = 'none';
});

new DataTable('#table-list');

new DataTable('#table-list', {
    responsive: true,
    buttons: [
      {
        extend: 'copy',
        text: 'نسخ'
      },
      {
        extend: 'pdf',
        text: 'تحميل PDF'
      },
      {
        extend: 'excel',
        text: 'تحميل اكسل'
      },
      {
        extend: 'print',
        text: 'طباعة'
      },
        // 'copy', 'excel', 'pdf'
    ],
    layout: {
        topStart: 'buttons'
    }
});