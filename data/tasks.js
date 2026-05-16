/* TASKS — extracted from index.html */
var TASKS = [
  // ── Phase 1: Job Requisition ──────────────────────────────────────────
  // Stage gate: active at 'approved-not-posted'
  // Step 1 auto-checked on position create; clicking checkbox opens +New modal
  {phase:'Job Requisition', id:'t1',
   title:'Submit open position request',
   desc:'Click "+New" in Active Pipeline, enter all required position details, and click "Open Position" to submit the requisition.',
   owner:'hm', ownerLabel:'Hiring Manager', off:-70, links:[]},

  {phase:'Job Requisition', id:'t2',
   title:'RD submits to ES Leadership for approval',
   desc:'Regional Director reviews the request and formally submits to ES Leadership (Craig Gaibler / Nesana Wieger) for approval.',
   owner:'rd', ownerLabel:'Regional Director', off:-65, links:[],
   skipIfHMisRD: true},

  {phase:'Job Requisition', id:'t3',
   title:'ES Leadership submits to Growth for approval (if needed)',
   desc:'Craig Gaibler or Nesana Wieger submits to Growth leadership (Laure Chachere / Anytra Lowe) for additional approval if required.',
   owner:'es', ownerLabel:'ES Leadership', off:-60, links:[]},

  // ── Phase 2: Recruiting & Interviewing ───────────────────────────────
  // Stage gate: unlocks when stage = 'posted'
  {phase:'Recruiting & Interviewing', id:'t4',
   title:'Communicate with HR Business Partner',
   desc:'Craig Gaibler or Nesana Wieger emails Chastity Austin, copying HR Recruiter, Hiring Manager, Regional Director, Erica Cochran, and Erii Rodriguez.',
   owner:'es', ownerLabel:'ES Leadership', off:-56,
   links:[{label:'HRBP: Chastity Austin', url:'mailto:Chastity.Austin@freeman.com'}]},

  {phase:'Recruiting & Interviewing', id:'t5',
   title:'Post position to job boards',
   desc:'HR Business Partner publishes position to company site, LinkedIn, and job boards.',
   owner:'anyone', ownerLabel:'HR Business Partner', off:-49, links:[]},

  {phase:'Recruiting & Interviewing', id:'t6',
   title:'Screen applicants & share candidate shortlist',
   desc:'HR Recruiter aligns on expectations with Hiring Manager, screens applicants, and shares a qualified candidate shortlist.',
   owner:'anyone', ownerLabel:'HR Recruiter', off:-42, links:[]},

  {phase:'Recruiting & Interviewing', id:'t7',
   title:'Schedule interviews',
   desc:'Arrange behavioral and cultural alignment interviews. Panel interviews are required for all leadership roles.',
   owner:'hm', ownerLabel:'Hiring Manager', off:-35,
   links:[{label:'Interview Questions', url:'https://freemanco.sharepoint.com/teams/ExhibitorServices296/Shared%20Documents/General/Recruiting%20and%20Hiring%20%28docs%20accessible%20to%20all%29/Exhibitor%20Services%20Interview%20Questions.pdf'}]},

  {phase:'Recruiting & Interviewing', id:'t8',
   title:'Conduct interviews',
   desc:'Conduct candidate interviews using ES leadership interview questions. Document feedback for each candidate.',
   owner:'hm', ownerLabel:'Hiring Manager', off:-28, links:[]},

  {phase:'Recruiting & Interviewing', id:'t9',
   title:'Select final candidate',
   desc:'Review all feedback and select final candidate. Discuss compensation and obtain written approval from ES Leadership and HR Business Partner before proceeding.',
   owner:'hm', ownerLabel:'Hiring Manager', off:-21, links:[]},

  // ── Phase 3: Job Offer ────────────────────────────────────────────────
  // Stage gate: unlocks when stage = 'interviewing'
  {phase:'Job Offer', id:'t10',
   title:'Make verbal offer to candidate',
   desc:'Call the candidate with the verbal offer, pending background check clearance. Be prepared to negotiate.',
   owner:'hm', ownerLabel:'Hiring Manager', off:-18, links:[]},

  {phase:'Job Offer', id:'t11',
   title:'Email HRBP & HR Recruiter to initiate offer letter',
   desc:'After receiving verbal acceptance, email HR Business Partner and HR Recruiter requesting they initiate the DocuSign offer letter.',
   owner:'hm', ownerLabel:'Hiring Manager', off:-17,
   links:[{label:'Megan Wierick', url:'mailto:Megan.Wierick@freeman.com'}]},

  {phase:'Job Offer', id:'t12',
   title:'Review & sign offer letter (DocuSign)',
   desc:'HR creates the offer letter. Hiring Manager reviews and signs. Candidate signs. Must be fully signed 11+ business days before intended start date.',
   owner:'hm', ownerLabel:'Hiring Manager', off:-14, links:[]},

  {phase:'Job Offer', id:'t13',
   title:'Background check clears — hire date confirmed',
   desc:'HR Business Partner completes background screening. Hire date is confirmed with Hiring Manager once cleared.',
   owner:'anyone', ownerLabel:'HR Business Partner', off:-11, links:[]},

  {phase:'Job Offer', id:'t14',
   title:'Confirm NET class attendance',
   desc:'Does this hire need to attend the next NET class? Returning employees who have previously completed NET may not require attendance. Hiring Manager determines and confirms.',
   owner:'hm', ownerLabel:'Hiring Manager', off:-10, links:[],
   gatedBehind:'t13', netConfirmStep:true},
];

