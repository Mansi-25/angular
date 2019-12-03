import {Item, Menu} from "./menu";


export  let menuData:Menu[]=[
  new Menu('Home', 'pi pi-fw pi-sign-out','Home',[new Item('About Loans',
    'pi pi-fw pi-share-alt',''),new Item('About Offers','pi pi-fw pi-pencil','') ]),

  new Menu('Loan', 'pi pi-fw pi-plus','',[new Item('Add',
    'pi pi-fw pi-share-alt',''),
    new Item('Eligibility-Check','pi pi-fw pi-pencil',''),
    new Item('Loan Status','pi pi-fw pi-cog',''),
    new Item('Pay EMI','pi pi-fw pi-key','')
  ]),

  new Menu('Login/Register', 'pi pi-fw pi-sign-out','',[ ] ),

  new Menu('Alerts', 'pi pi-fw pi-sign-out','Vehicle',[ ]),
  new Menu('Admin', 'pi pi-fw pi-sign-out','Report',[ ]),
  new Menu('Dashboard', 'pi pi-fw pi-sign-out','Dashboard',[ ])

]