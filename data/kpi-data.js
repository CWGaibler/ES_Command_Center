/* KPI_DATA — extracted from index.html */
var KPI_DATA = [
  {
    id: 'css',
    name: 'ES Customer Service Score',
    fullName: 'ES Customer Service Score',
    def: "The percentage of customers who respond 'excellent' when surveyed: 'How would you rate the customer service provided by Freeman's Exhibitor Service Center / desk staff?'",
    goal: '60%', goalNum: 60, unit: '%', higherBetter: true,
    refresh: 'Daily',
    responsible: 'All ES Teams',
    enterprise: 58, regions: {'Canada':54,'Las Vegas':61,'North Central':57,'Northeast':59,'NW/SoCal':62,'South Central':56,'Southeast':60},
    branches: {'Toronto':54,'Las Vegas':61,'Chicago':58,'Des Moines':55,'Boston':60,'New York':57,'Washington D.C.':61,'Anaheim':63,'Denver':60,'Reno':59,'San Francisco':64,'Dallas':55,'Houston':57,'San Antonio':56,'Atlanta':61,'Nashville':59,'New Orleans':58,'Orlando':62}
  },
  {
    id: 'nps',
    name: 'Exhibitor Post-Show NPS',
    fullName: 'Post-Show Exhibitor Net Promoter Score (NPS)',
    def: "Net Promoter Score derived from: 'Based on your recent experience with Freeman, how likely are you to recommend Freeman's products and services to your colleagues?'",
    goal: '+20', goalNum: 20, unit: '', prefix: '+', higherBetter: true,
    refresh: 'Daily',
    responsible: 'All ES Teams',
    enterprise: 24, regions: {'Canada':18,'Las Vegas':28,'North Central':22,'Northeast':25,'NW/SoCal':27,'South Central':21,'Southeast':23},
    branches: {'Toronto':18,'Las Vegas':28,'Chicago':22,'Des Moines':20,'Boston':26,'New York':24,'Washington D.C.':25,'Anaheim':28,'Denver':27,'Reno':24,'San Francisco':30,'Dallas':21,'Houston':22,'San Antonio':19,'Atlanta':23,'Nashville':22,'New Orleans':21,'Orlando':25}
  },
  {
    id: 'collections',
    name: 'Collections',
    fullName: 'Collections Percentage',
    def: 'The percentage of exhibitor revenue collected by Exhibitor Services on tradeshow engagements by the 8th business day post-show close.',
    goal: '96%', goalNum: 96, unit: '%', higherBetter: true,
    refresh: 'Monthly',
    responsible: 'All ES Teams',
    enterprise: 94.2, regions: {'Canada':93,'Las Vegas':95,'North Central':94,'Northeast':96,'NW/SoCal':97,'South Central':93,'Southeast':95},
    branches: {'Toronto':93,'Las Vegas':95,'Chicago':94,'Des Moines':93,'Boston':97,'New York':96,'Washington D.C.':96,'Anaheim':97,'Denver':96,'Reno':95,'San Francisco':98,'Dallas':93,'Houston':94,'San Antonio':92,'Atlanta':95,'Nashville':94,'New Orleans':93,'Orlando':96}
  },
  {
    id: 'per',
    name: 'Priority Empty Return Sales',
    fullName: 'Priority Empty Return Sales',
    def: 'Revenue associated to the sale of Priority Empty Return labels.',
    goal: '$6.4M', goalNum: 6400000, unit: '$M', higherBetter: true,
    refresh: 'Daily',
    responsible: 'All ES Teams',
    enterprise: 5800000, regions: {'Canada':180000,'Las Vegas':1200000,'North Central':820000,'Northeast':650000,'NW/SoCal':980000,'South Central':780000,'Southeast':880000},
    branches: {'Toronto':180000,'Las Vegas':1200000,'Chicago':620000,'Des Moines':200000,'Boston':220000,'New York':250000,'Washington D.C.':180000,'Anaheim':320000,'Denver':260000,'Reno':180000,'San Francisco':220000,'Dallas':310000,'Houston':280000,'San Antonio':190000,'Atlanta':320000,'Nashville':200000,'New Orleans':160000,'Orlando':200000}
  },
  {
    id: 'invoicing',
    name: 'Invoice Timing',
    fullName: 'Invoice Timing',
    def: 'For billing that ES is responsible for, the percentage of events where all billing was invoiced by show close +8 business days.',
    goal: '95%', goalNum: 95, unit: '%', higherBetter: true,
    refresh: 'Weekly (Mon 10a)',
    responsible: 'All ES Teams',
    enterprise: 96.1, regions: {'Canada':94,'Las Vegas':97,'North Central':96,'Northeast':95,'NW/SoCal':98,'South Central':94,'Southeast':96},
    branches: {'Toronto':94,'Las Vegas':97,'Chicago':96,'Des Moines':95,'Boston':96,'New York':94,'Washington D.C.':96,'Anaheim':98,'Denver':97,'Reno':96,'San Francisco':99,'Dallas':94,'Houston':95,'San Antonio':93,'Atlanta':96,'Nashville':95,'New Orleans':94,'Orlando':97}
  },
  {
    id: 'feedback',
    name: 'ES Post-Show Feedback',
    fullName: 'ES Post-Show Feedback',
    def: 'For events supported by Exhibitor Services on-site, the percentage of shows where a Post-Event feedback survey was completed by Exhibitor Services.',
    goal: '95%', goalNum: 95, unit: '%', higherBetter: true,
    refresh: 'Weekly',
    responsible: 'On-Site ES Teams',
    enterprise: 88, regions: {'Canada':82,'Las Vegas':91,'North Central':88,'Northeast':87,'NW/SoCal':92,'South Central':86,'Southeast':89},
    branches: {'Toronto':82,'Las Vegas':91,'Chicago':89,'Des Moines':86,'Boston':88,'New York':87,'Washington D.C.':88,'Anaheim':93,'Denver':91,'Reno':90,'San Francisco':94,'Dallas':87,'Houston':86,'San Antonio':85,'Atlanta':90,'Nashville':88,'New Orleans':86,'Orlando':91}
  },
  {
    id: 'emailq',
    name: 'Email Queue Time',
    fullName: 'ES Email Queue Time',
    def: 'For emails sent to ExhibitorServices@freeman.com, the average time it takes a new email to be assigned to a work queue from the time it was received.',
    goal: '< 24 hrs', goalNum: 24, unit: 'hrs', higherBetter: false,
    refresh: 'Weekly (Mon morning)',
    responsible: 'Off-Site ES Team',
    enterprise: 18.4, regions: {'Off-Site':18.4},
    branches: {'Off-Site':18.4}
  },
  {
    id: 'emailh',
    name: 'Email Handle Time',
    fullName: 'ES Email Handle Time',
    def: 'For emails sent to ExhibitorServices@freeman.com, the average time it takes an email to be resolved from the time it was assigned to a work queue.',
    goal: '< 48 hrs', goalNum: 48, unit: 'hrs', higherBetter: false,
    refresh: 'Weekly (Mon morning)',
    responsible: 'Off-Site ES Team',
    enterprise: 31.2, regions: {'Off-Site':31.2},
    branches: {'Off-Site':31.2}
  },
  {
    id: 'training',
    name: 'Training Completion',
    fullName: 'Training Completion',
    def: 'The percentage of required training courses assigned to Exhibitor Services team members that was completed as expected.',
    goal: '100%', goalNum: 100, unit: '%', higherBetter: true,
    refresh: 'Weekly (Mon 10a)',
    responsible: 'All ES Teams',
    enterprise: 91, regions: {'Canada':88,'Las Vegas':93,'North Central':90,'Northeast':92,'NW/SoCal':94,'South Central':89,'Southeast':91},
    branches: {'Toronto':88,'Las Vegas':93,'Chicago':91,'Des Moines':89,'Boston':92,'New York':92,'Washington D.C.':93,'Anaheim':95,'Denver':93,'Reno':92,'San Francisco':96,'Dallas':89,'Houston':90,'San Antonio':88,'Atlanta':92,'Nashville':90,'New Orleans':89,'Orlando':92}
  }
];
