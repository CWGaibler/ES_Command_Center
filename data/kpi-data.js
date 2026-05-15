/* KPI_DATA — v32.0: added trendEnt, trendEntPY, trendReg, trendRegPY for YOY trend charts */
var KPI_DATA = [
  {
    id: 'css', name: 'ES Customer Service Score', fullName: 'ES Customer Service Score',
    def: "The percentage of customers who respond 'excellent' when surveyed: 'How would you rate the customer service provided by Freeman's Exhibitor Service Center / desk staff?'",
    goal: '60%', goalNum: 60, unit: '%', higherBetter: true, refresh: 'Daily', responsible: 'All ES Teams',
    enterprise: 58,
    trendEnt:    [52,54,53,55,56,55,57,56,58,57,58,58],
    trendEntPY:  [50,51,50,52,53,52,54,53,55,54,55,56],
    regions: {'Canada':54,'Las Vegas':61,'North Central':57,'Northeast':59,'NW/SoCal':62,'South Central':56,'Southeast':60},
    trendReg: {
      'Canada':        [49,51,50,52,52,53,53,53,54,54,54,54],
      'Las Vegas':     [56,57,58,59,60,61,61,61,61,61,61,61],
      'North Central': [52,53,54,54,55,55,56,56,56,57,57,57],
      'Northeast':     [54,55,55,56,57,57,58,58,58,59,59,59],
      'NW/SoCal':      [57,58,59,60,61,61,62,62,62,62,62,62],
      'South Central': [51,52,53,53,54,55,55,55,56,56,56,56],
      'Southeast':     [55,56,57,58,58,59,59,60,60,60,60,60]
    },
    trendRegPY: {
      'Canada':        [47,48,47,49,50,50,51,51,52,52,53,53],
      'Las Vegas':     [53,54,55,56,57,58,58,59,59,60,60,60],
      'North Central': [49,50,51,51,52,52,53,53,54,54,55,55],
      'Northeast':     [51,52,52,53,54,54,55,55,56,56,57,57],
      'NW/SoCal':      [54,55,56,57,58,58,59,60,60,61,61,61],
      'South Central': [48,49,50,50,51,52,52,52,53,53,54,54],
      'Southeast':     [52,53,54,55,55,56,57,57,58,58,59,59]
    },
    branches: {'Toronto':54,'Las Vegas':61,'Chicago':58,'Des Moines':55,'Boston':60,'New York':57,'Washington D.C.':61,'Anaheim':63,'Denver':60,'Reno':59,'San Francisco':64,'Dallas':55,'Houston':57,'San Antonio':56,'Atlanta':61,'Nashville':59,'New Orleans':58,'Orlando':62}
  },
  {
    id: 'nps', name: 'Exhibitor Post-Show NPS', fullName: 'Post-Show Exhibitor Net Promoter Score (NPS)',
    def: "Net Promoter Score derived from: 'Based on your recent experience with Freeman, how likely are you to recommend Freeman's products and services to your colleagues?'",
    goal: '+20', goalNum: 20, unit: '', prefix: '+', higherBetter: true, refresh: 'Daily', responsible: 'All ES Teams',
    enterprise: 24,
    trendEnt:    [16,17,18,19,20,21,22,22,23,23,24,24],
    trendEntPY:  [13,14,15,16,17,17,18,18,19,20,20,21],
    regions: {'Canada':18,'Las Vegas':28,'North Central':22,'Northeast':25,'NW/SoCal':27,'South Central':21,'Southeast':23},
    trendReg: {
      'Canada':        [12,13,14,15,15,16,16,17,17,18,18,18],
      'Las Vegas':     [22,23,24,25,26,26,27,27,28,28,28,28],
      'North Central': [17,18,18,19,20,20,21,21,22,22,22,22],
      'Northeast':     [19,20,21,22,22,23,23,24,24,25,25,25],
      'NW/SoCal':      [21,22,23,24,25,25,26,26,27,27,27,27],
      'South Central': [16,17,17,18,19,19,20,20,21,21,21,21],
      'Southeast':     [18,19,19,20,21,21,22,22,23,23,23,23]
    },
    trendRegPY: {
      'Canada':        [10,11,11,12,13,13,14,14,15,15,16,16],
      'Las Vegas':     [19,20,21,22,23,23,24,24,25,25,26,26],
      'North Central': [14,15,15,16,17,17,18,18,19,19,20,20],
      'Northeast':     [16,17,18,19,19,20,20,21,21,22,22,23],
      'NW/SoCal':      [18,19,20,21,22,22,23,23,24,24,25,25],
      'South Central': [13,14,14,15,16,16,17,17,18,18,19,19],
      'Southeast':     [15,16,16,17,18,18,19,19,20,20,21,21]
    },
    branches: {'Toronto':18,'Las Vegas':28,'Chicago':22,'Des Moines':20,'Boston':26,'New York':24,'Washington D.C.':25,'Anaheim':28,'Denver':27,'Reno':24,'San Francisco':30,'Dallas':21,'Houston':22,'San Antonio':19,'Atlanta':23,'Nashville':22,'New Orleans':21,'Orlando':25}
  },
  {
    id: 'collections', name: 'Collections', fullName: 'Collections Percentage',
    def: 'The percentage of exhibitor revenue collected by Exhibitor Services on tradeshow engagements by the 8th business day post-show close.',
    goal: '96%', goalNum: 96, unit: '%', higherBetter: true, refresh: 'Monthly', responsible: 'All ES Teams',
    enterprise: 94.2,
    trendEnt:    [92,93,93,94,93,94,94,94,94,94,94,94.2],
    trendEntPY:  [90,91,91,92,91,92,92,93,93,93,93,93],
    regions: {'Canada':93,'Las Vegas':95,'North Central':94,'Northeast':96,'NW/SoCal':97,'South Central':93,'Southeast':95},
    trendReg: {
      'Canada':        [90,91,91,92,92,93,93,93,93,93,93,93],
      'Las Vegas':     [92,93,93,94,94,95,95,95,95,95,95,95],
      'North Central': [91,92,92,93,93,94,94,94,94,94,94,94],
      'Northeast':     [93,94,94,95,95,96,96,96,96,96,96,96],
      'NW/SoCal':      [94,95,95,96,96,97,97,97,97,97,97,97],
      'South Central': [90,91,91,92,92,93,93,93,93,93,93,93],
      'Southeast':     [92,93,93,94,94,95,95,95,95,95,95,95]
    },
    trendRegPY: {
      'Canada':        [88,89,89,90,90,91,91,91,91,92,92,92],
      'Las Vegas':     [90,91,91,92,92,93,93,93,94,94,94,94],
      'North Central': [89,90,90,91,91,92,92,92,93,93,93,93],
      'Northeast':     [91,92,92,93,93,94,94,94,95,95,95,95],
      'NW/SoCal':      [92,93,93,94,94,95,95,96,96,96,96,96],
      'South Central': [88,89,89,90,90,91,91,91,92,92,92,92],
      'Southeast':     [90,91,91,92,92,93,93,93,94,94,94,94]
    },
    branches: {'Toronto':93,'Las Vegas':95,'Chicago':94,'Des Moines':93,'Boston':97,'New York':96,'Washington D.C.':96,'Anaheim':97,'Denver':96,'Reno':95,'San Francisco':98,'Dallas':93,'Houston':94,'San Antonio':92,'Atlanta':95,'Nashville':94,'New Orleans':93,'Orlando':96}
  },
  {
    id: 'per', name: 'Priority Empty Return Sales', fullName: 'Priority Empty Return Sales',
    def: 'Revenue associated to the sale of Priority Empty Return labels.',
    goal: '$6.4M', goalNum: 6400000, unit: '$M', higherBetter: true, refresh: 'Daily', responsible: 'All ES Teams',
    enterprise: 5800000,
    trendEnt:    [4100000,4400000,4600000,4900000,5100000,5200000,5300000,5400000,5500000,5600000,5700000,5800000],
    trendEntPY:  [3600000,3900000,4100000,4300000,4500000,4600000,4700000,4800000,4900000,5000000,5100000,5200000],
    regions: {'Canada':180000,'Las Vegas':1200000,'North Central':820000,'Northeast':650000,'NW/SoCal':980000,'South Central':780000,'Southeast':880000},
    trendReg: {
      'Canada':        [110000,120000,130000,140000,150000,155000,160000,165000,170000,175000,178000,180000],
      'Las Vegas':     [800000,860000,920000,980000,1020000,1060000,1100000,1120000,1150000,1170000,1190000,1200000],
      'North Central': [550000,580000,620000,660000,690000,710000,740000,760000,780000,800000,810000,820000],
      'Northeast':     [420000,440000,460000,490000,520000,540000,570000,600000,620000,630000,640000,650000],
      'NW/SoCal':      [650000,690000,730000,780000,820000,850000,890000,920000,940000,960000,970000,980000],
      'South Central': [510000,530000,560000,590000,620000,650000,680000,710000,730000,750000,760000,780000],
      'Southeast':     [580000,610000,640000,680000,710000,730000,760000,790000,820000,840000,860000,880000]
    },
    trendRegPY: {
      'Canada':        [90000,100000,110000,120000,130000,135000,140000,145000,150000,155000,158000,160000],
      'Las Vegas':     [680000,730000,790000,840000,880000,910000,950000,970000,1000000,1020000,1040000,1060000],
      'North Central': [470000,500000,540000,580000,610000,630000,660000,680000,700000,720000,730000,740000],
      'Northeast':     [360000,380000,400000,430000,460000,480000,510000,540000,560000,570000,580000,590000],
      'NW/SoCal':      [560000,600000,640000,690000,730000,760000,800000,830000,850000,870000,880000,890000],
      'South Central': [440000,460000,490000,520000,550000,580000,610000,640000,660000,680000,690000,710000],
      'Southeast':     [500000,530000,560000,600000,630000,650000,680000,710000,740000,760000,780000,800000]
    },
    branches: {'Toronto':180000,'Las Vegas':1200000,'Chicago':620000,'Des Moines':200000,'Boston':220000,'New York':250000,'Washington D.C.':180000,'Anaheim':320000,'Denver':260000,'Reno':180000,'San Francisco':220000,'Dallas':310000,'Houston':280000,'San Antonio':190000,'Atlanta':320000,'Nashville':200000,'New Orleans':160000,'Orlando':200000}
  },
  {
    id: 'invoicing', name: 'Invoice Timing', fullName: 'Invoice Timing',
    def: 'For billing that ES is responsible for, the percentage of events where all billing was invoiced by show close +8 business days.',
    goal: '95%', goalNum: 95, unit: '%', higherBetter: true, refresh: 'Weekly (Mon 10a)', responsible: 'All ES Teams',
    enterprise: 96.1,
    trendEnt:    [93,93.5,94,94,94.5,95,95.2,95.5,95.8,96,96,96.1],
    trendEntPY:  [91,91.5,92,92,92.5,93,93.2,93.5,93.8,94,94,94.2],
    regions: {'Canada':94,'Las Vegas':97,'North Central':96,'Northeast':95,'NW/SoCal':98,'South Central':94,'Southeast':96},
    trendReg: {
      'Canada':        [90,91,91,92,92,93,93,93,94,94,94,94],
      'Las Vegas':     [94,94,95,95,96,96,96,97,97,97,97,97],
      'North Central': [92,93,93,94,94,95,95,95,96,96,96,96],
      'Northeast':     [91,92,92,93,93,94,94,94,95,95,95,95],
      'NW/SoCal':      [95,95,96,96,97,97,97,98,98,98,98,98],
      'South Central': [90,91,91,92,92,93,93,93,94,94,94,94],
      'Southeast':     [92,93,93,94,94,95,95,95,96,96,96,96]
    },
    trendRegPY: {
      'Canada':        [87,88,88,89,89,90,90,91,91,92,92,92],
      'Las Vegas':     [91,91,92,92,93,93,94,94,95,95,95,95],
      'North Central': [89,90,90,91,91,92,92,93,93,94,94,94],
      'Northeast':     [88,89,89,90,90,91,91,92,92,93,93,93],
      'NW/SoCal':      [92,92,93,93,94,94,95,95,96,96,96,96],
      'South Central': [87,88,88,89,89,90,90,91,91,92,92,92],
      'Southeast':     [89,90,90,91,91,92,92,93,93,94,94,94]
    },
    branches: {'Toronto':94,'Las Vegas':97,'Chicago':96,'Des Moines':95,'Boston':96,'New York':94,'Washington D.C.':96,'Anaheim':98,'Denver':97,'Reno':96,'San Francisco':99,'Dallas':94,'Houston':95,'San Antonio':93,'Atlanta':96,'Nashville':95,'New Orleans':94,'Orlando':97}
  },
  {
    id: 'feedback', name: 'ES Post-Show Feedback', fullName: 'ES Post-Show Feedback',
    def: 'For events supported by Exhibitor Services on-site, the percentage of shows where a Post-Event feedback survey was completed by Exhibitor Services.',
    goal: '95%', goalNum: 95, unit: '%', higherBetter: true, refresh: 'Weekly', responsible: 'On-Site ES Teams',
    enterprise: 88,
    trendEnt:    [80,81,82,83,84,84,85,85,86,87,87,88],
    trendEntPY:  [76,77,78,79,80,80,81,81,82,83,83,84],
    regions: {'Canada':82,'Las Vegas':91,'North Central':88,'Northeast':87,'NW/SoCal':92,'South Central':86,'Southeast':89},
    trendReg: {
      'Canada':        [74,76,77,78,78,79,80,80,81,81,82,82],
      'Las Vegas':     [84,85,86,87,88,88,89,90,90,91,91,91],
      'North Central': [81,82,83,84,85,85,86,87,87,88,88,88],
      'Northeast':     [80,81,82,83,83,84,85,85,86,86,87,87],
      'NW/SoCal':      [85,86,87,88,88,89,90,91,91,92,92,92],
      'South Central': [79,80,81,82,83,83,84,85,85,86,86,86],
      'Southeast':     [82,83,84,85,85,86,87,87,88,88,89,89]
    },
    trendRegPY: {
      'Canada':        [70,72,73,74,74,75,76,76,77,77,78,78],
      'Las Vegas':     [80,81,82,83,84,84,85,86,86,87,87,87],
      'North Central': [77,78,79,80,81,81,82,83,83,84,84,84],
      'Northeast':     [76,77,78,79,79,80,81,81,82,82,83,83],
      'NW/SoCal':      [81,82,83,84,84,85,86,87,87,88,88,88],
      'South Central': [75,76,77,78,79,79,80,81,81,82,82,82],
      'Southeast':     [78,79,80,81,81,82,83,83,84,84,85,85]
    },
    branches: {'Toronto':82,'Las Vegas':91,'Chicago':89,'Des Moines':86,'Boston':88,'New York':87,'Washington D.C.':88,'Anaheim':93,'Denver':91,'Reno':90,'San Francisco':94,'Dallas':87,'Houston':86,'San Antonio':85,'Atlanta':90,'Nashville':88,'New Orleans':86,'Orlando':91}
  },
  {
    id: 'emailq', name: 'Email Queue Time', fullName: 'ES Email Queue Time',
    def: 'For emails sent to ExhibitorServices@freeman.com, the average time it takes a new email to be assigned to a work queue from the time it was received.',
    goal: '< 24 hrs', goalNum: 24, unit: 'hrs', higherBetter: false, refresh: 'Weekly (Mon morning)', responsible: 'Off-Site ES Team',
    enterprise: 18.4,
    trendEnt:    [26,25,24,23,22,22,21,20,20,19,19,18.4],
    trendEntPY:  [29,28,27,26,25,25,24,23,23,22,22,21],
    regions: {'Off-Site':18.4},
    trendReg:   {'Off-Site':[26,25,24,23,22,22,21,20,20,19,19,18.4]},
    trendRegPY: {'Off-Site':[29,28,27,26,25,25,24,23,23,22,22,21]},
    branches: {'Off-Site':18.4}
  },
  {
    id: 'emailh', name: 'Email Handle Time', fullName: 'ES Email Handle Time',
    def: 'For emails sent to ExhibitorServices@freeman.com, the average time it takes an email to be resolved from the time it was assigned to a work queue.',
    goal: '< 48 hrs', goalNum: 48, unit: 'hrs', higherBetter: false, refresh: 'Weekly (Mon morning)', responsible: 'Off-Site ES Team',
    enterprise: 31.2,
    trendEnt:    [44,43,42,41,40,39,38,37,36,34,32,31.2],
    trendEntPY:  [48,47,46,45,44,43,42,41,40,38,36,35],
    regions: {'Off-Site':31.2},
    trendReg:   {'Off-Site':[44,43,42,41,40,39,38,37,36,34,32,31.2]},
    trendRegPY: {'Off-Site':[48,47,46,45,44,43,42,41,40,38,36,35]},
    branches: {'Off-Site':31.2}
  },
  {
    id: 'training', name: 'Training Completion', fullName: 'Training Completion',
    def: 'The percentage of required training courses assigned to Exhibitor Services team members that was completed as expected.',
    goal: '100%', goalNum: 100, unit: '%', higherBetter: true, refresh: 'Weekly (Mon 10a)', responsible: 'All ES Teams',
    enterprise: 91,
    trendEnt:    [83,84,85,86,87,87,88,88,89,90,90,91],
    trendEntPY:  [80,81,82,83,84,84,85,85,86,87,87,88],
    regions: {'Canada':88,'Las Vegas':93,'North Central':90,'Northeast':92,'NW/SoCal':94,'South Central':89,'Southeast':91},
    trendReg: {
      'Canada':        [81,82,83,84,84,85,86,86,87,87,88,88],
      'Las Vegas':     [87,88,89,90,90,91,91,92,92,93,93,93],
      'North Central': [83,84,85,86,86,87,88,88,89,89,90,90],
      'Northeast':     [85,86,87,87,88,89,89,90,90,91,92,92],
      'NW/SoCal':      [88,89,90,90,91,91,92,92,93,93,94,94],
      'South Central': [82,83,84,85,85,86,87,87,88,88,89,89],
      'Southeast':     [84,85,86,87,87,88,89,89,90,90,91,91]
    },
    trendRegPY: {
      'Canada':        [78,79,80,81,81,82,83,83,84,84,85,85],
      'Las Vegas':     [84,85,86,87,87,88,88,89,89,90,90,90],
      'North Central': [80,81,82,83,83,84,85,85,86,86,87,87],
      'Northeast':     [82,83,84,84,85,86,86,87,87,88,89,89],
      'NW/SoCal':      [85,86,87,87,88,88,89,89,90,90,91,91],
      'South Central': [79,80,81,82,82,83,84,84,85,85,86,86],
      'Southeast':     [81,82,83,84,84,85,86,86,87,87,88,88]
    },
    branches: {'Toronto':88,'Las Vegas':93,'Chicago':91,'Des Moines':89,'Boston':92,'New York':92,'Washington D.C.':93,'Anaheim':95,'Denver':93,'Reno':92,'San Francisco':96,'Dallas':89,'Houston':90,'San Antonio':88,'Atlanta':92,'Nashville':90,'New Orleans':89,'Orlando':92}
  }
];
