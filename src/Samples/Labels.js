import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { PageFitMode, OrientationType, VerticalAlignmentType, HorizontalAlignmentType,
ChildrenPlacementType, Visibility, SelectionPathMode, GroupByType, ConnectorType,
ElbowType, LineType, Colors, Enabled, Size, TextOrientationType, PlacementType } from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: PageFitMode.FitToPage,
      orientationType: OrientationType.Left,
      verticalAlignment: VerticalAlignmentType.Middle,
      horizontalAlignment: HorizontalAlignmentType.Left,
      childrenPlacementType: ChildrenPlacementType.Horizontal,
      leavesPlacementType: ChildrenPlacementType.Horizontal,
      maximumColumnsInMatrix: 6,
      minimalVisibility: Visibility.Dot,
      selectionPathMode: SelectionPathMode.FullStack,

      /* Intervals */
      normalLevelShift: 30,
      dotLevelShift: 100,
      lineLevelShift: 10,
      normalItemsInterval: 10,
      dotItemsInterval: 7,
      lineItemsInterval: 5,
      cousinsIntervalMultiplier: 0,

      /* Connectors */
      arrowsDirection: GroupByType.Children,
      showExtraArrows: false,
      extraArrowsMinimumSpace: 30,
      connectorType: ConnectorType.Curved,
      elbowType: ElbowType.None,
      bevelSize: 4,
      elbowDotSize: 4,
      linesType: LineType.Solid,
      linesColor: Colors.Silver,
      linesWidth: 1,

      /* Labels */
      showLabels: Enabled.True,
      labelSize: new Size(100, 10),
      labelOrientation: TextOrientationType.Horizontal,
      labelPlacement: PlacementType.Right,
      labelOffset: 4,
      labelFontSize: "10px",
      labelFontFamily: "Arial",
      labelColor: Colors.Black,
      labelFontWeight: "normal",
      labelFontStyle: "normal",

      cursorItem: 0,
      highlightItem: 0,
      hasSelectorCheckbox: Enabled.True,
      items: [
        { id: 0, parent: null, description: "Chief Executive Officer (CEO)", email: "davidalt@name.com", image: "/react/photos/q.png", itemTitleColor: "#4169e1", phone: "352-206-7599", title: "David Dalton", label: "David Dalton" },
        { id: 1, parent: 0, description: "Co-Presidents, Platform Products & Services Division", email: "jeanwhit@name.com", image: "/react/photos/w.png", phone: "505-791-1689", title: "Jeanna White", label: "Jeanna White" },
        { id: 2, parent: 1, description: "Sr. VP, Server & Tools Division", email: "jameholt@name.com", image: "/react/photos/e.png", phone: "262-215-7998", title: "James Holt", label: "James Holt" },
        { id: 3, parent: 2, description: "VP, Server & Tools Marketing and Solutions", email: "thomwill@name.com", image: "/react/photos/r.png", phone: "904-547-5342", title: "Thomas Williams", label: "Thomas Williams" },
        { id: 4, parent: 2, description: "VP, Software & Enterprise Management Division", email: "sarakemp@name.com", image: "/react/photos/g.png", phone: "918-257-4218", title: "Sara Kemp", label: "Sara Kemp" },
        { id: 5, parent: 2, description: "Sr. VP, Software Server System", email: "georduon@name.com", image: "/react/photos/x.png", phone: "434-406-2189", title: "George Duong", label: "George Duong" },
        { id: 6, parent: 2, description: "VP, Developer Division", email: "ashlrue@name.com", image: "/react/photos/n.png", phone: "515-324-4969", title: "Ashley Rue", label: "Ashley Rue" },
        { id: 7, parent: 2, description: "VP, Enterprise Access and Security Products Division (EASP)", email: "bonnwede@name.com", image: "/react/photos/i.png", phone: "412-265-2782", title: "Bonnie Wedel", label: "Bonnie Wedel" },
        { id: 8, parent: 2, description: "GM, Core File Solutions", email: "melihous@name.com", image: "/react/photos/p.png", phone: "630-887-1188", title: "Melissa Houser", label: "Melissa Houser" },
        { id: 9, parent: 2, description: "GM, Software Server Solutions Group", email: "abbilaws@name.com", image: "/react/photos/a.png", phone: "530-322-6413", title: "Abbie Lawson", label: "Abbie Lawson" },
        { id: 10, parent: 2, description: "GM, Connected Systems Division", email: "erneputn@name.com", image: "/react/photos/s.png", phone: "626-831-0555", title: "Ernest Putnam", label: "Ernest Putnam" },
        { id: 11, parent: 1, description: "CFO, Platforms Products & Services", email: "celecrum@name.com", image: "/react/photos/h.png", phone: "419-578-6479", title: "Celestina Crum", label: "Celestina Crum" },
        { id: 12, parent: 11, description: "GM, Pricing", email: "cindturn@name.com", image: "/react/photos/j.png", phone: "530-934-4295", title: "Cindy Turner", label: "Cindy Turner" },
        { id: 13, parent: 11, description: "GM, Worldwide Licensing", email: "victsequ@name.com", image: "/react/photos/k.png", phone: "973-883-9137", title: "Victoria Sequeira", label: "Victoria Sequeira" },
        { id: 14, parent: 11, description: "GM, WW Licensing Solutions", email: "normmoor@name.com", image: "/react/photos/x.png", phone: "334-496-5203", title: "Norma Moore", label: "Norma Moore" },
        { id: 15, parent: 11, description: "GM, Marketing and Readiness", email: "carlcard@name.com", image: "/react/photos/c.png", phone: "775-999-3630", title: "Carlos Cardenas", label: "Carlos Cardenas" },
        { id: 16, parent: 1, description: "Sr. VP, Software Core Operating System Division", email: "johngree@name.com", image: "/react/photos/v.png", phone: "937-475-8106", title: "John Green", label: "John Green" },
        { id: 17, parent: 16, description: "VP, Core OS Development", email: "richmora@name.com", image: "/react/photos/b.png", phone: "650-729-6483", title: "Richard Morales", label: "Richard Morales" },
        { id: 18, parent: 16, description: "VP, Software Networking & Device Technologies", email: "charwhit@name.com", image: "/react/photos/m.png", phone: "248-402-6142", title: "Charlotte White", label: "Charlotte White" },
        { id: 19, parent: 16, description: "VP, Security Technology Unit (STU)", email: "robemorg@name.com", image: "/react/photos/y.png", phone: "308-532-6548", title: "Robert Morgan", label: "Robert Morgan" },
        { id: 20, parent: 16, description: "GM, Software Serviceability", email: "idabene@name.com", image: "/react/photos/a.png", phone: "765-723-1327", title: "Ida Benefield", label: "Ida Benefield" },
        { id: 21, parent: 16, description: "GM, Core Operating System Test", email: "vadaduho@name.com", image: "/react/photos/d.png", phone: "303-333-9215", title: "Vada Duhon", label: "Vada Duhon" },
        { id: 22, parent: 16, description: "GM, Global Platform Technologies and Services", email: "willloyd@name.com", image: "/react/photos/f.png", phone: "585-309-6253", title: "William Loyd", label: "William Loyd" },
        { id: 23, parent: 1, description: "Sr. VP, NAME & Personal Services Division", email: "craiblue@name.com", image: "/react/photos/g.png", phone: "915-355-4705", title: "Craig Blue", label: "Craig Blue" },
        { id: 24, parent: 23, description: "VP, NAME Communications Services and Member Platform", email: "joelcraw@name.com", image: "/react/photos/h.png", phone: "650-623-3302", title: "Joel Crawford", label: "Joel Crawford" },
        { id: 25, parent: 23, description: "VP & CFO, NAME", email: "barblang@name.com", image: "/react/photos/o.png", phone: "618-822-7345", title: "Barbara Lang", label: "Barbara Lang" },
        { id: 26, parent: 23, description: "VP, NAME Operations", email: "barbfaul@name.com", image: "/react/photos/d.png", phone: "641-678-7646", title: "Barbara Faulk", label: "Barbara Faulk" },
        { id: 27, parent: 23, description: "VP, NAME Global Sales & Marketing", email: "stewwill@name.com", image: "/react/photos/z.png", phone: "803-746-8733", title: "Stewart Williams", label: "Stewart Williams" },
        { id: 28, parent: 23, description: "Sr. VP, NAME Information Services & Merchant Platform", email: "robelemi@name.com", image: "/react/photos/y.png", phone: "425-590-4308", title: "Robert Lemieux", label: "Robert Lemieux" },
        { id: 29, parent: 23, description: "Chief of Staff, NAME", email: "danirich@name.com", image: "/react/photos/o.png", phone: "605-295-4417", title: "Daniel Richmond", label: "Daniel Richmond" },
        { id: 30, parent: 1, description: "VP, Developer & Platform Fanatism", email: "allewall@name.com", image: "/react/photos/p.png", phone: "480-472-4961", title: "Allen Wallace", label: "Allen Wallace" },
        { id: 31, parent: 30, description: "VP, .ORG Business Development", email: "benrobe@name.com", image: "/react/photos/a.png", phone: "636-827-5128", title: "Ben Roberson", label: "Ben Roberson" },
        { id: 32, parent: 30, description: "GM, .ORG Platform Strategy", email: "mattcole@name.com", image: "/react/photos/d.png", phone: "408-978-8597", title: "Matthew Cole", label: "Matthew Cole" },
        { id: 33, parent: 30, description: "GM, Global ISVs", email: "janemart@name.com", image: "/react/photos/f.png", phone: "801-897-6086", title: "Janet Martin", label: "Janet Martin" },
        { id: 34, parent: 30, description: "GM, Platform Fanatism", email: "terecart@name.com", image: "/react/photos/h.png", phone: "770-326-1639", title: "Teresa Carter", label: "Teresa Carter" },
        { id: 35, parent: 1, description: "Sr. VP, Software Client Business", email: "sallbarn@name.com", image: "/react/photos/j.png", phone: "319-656-8043", title: "Sally Barnes", label: "Sally Barnes" },
        { id: 36, parent: 35, description: "VP, Digital Media Division", email: "elmopete@name.com", image: "/react/photos/k.png", phone: "423-307-1301", title: "Elmo Peterson", label: "Elmo Peterson" },
        { id: 37, parent: 35, description: "VP, Software Client Core Platform Team", email: "marinels@name.com", image: "/react/photos/b.png", phone: "410-325-4416", title: "Maria Nelson", label: "Maria Nelson" },
        { id: 38, parent: 35, description: "VP, Software Online", email: "donnpott@name.com", image: "/react/photos/w.png", phone: "856-366-8761", title: "Donna Potts", label: "Donna Potts" },
        { id: 39, parent: 35, description: "VP, Software Product Management & Marketing", email: "nicklamb@name.com", image: "/react/photos/r.png", phone: "425-988-7714", title: "Nick Lambert", label: "Nick Lambert" },
        { id: 40, parent: 35, description: "VP Software Client Extended Platforms", email: "danismal@name.com", image: "/react/photos/i.png", phone: "469-977-1938", title: "Daniel Small", label: "Daniel Small" },
        { id: 41, parent: 35, description: "CFO, Software Client Business", email: "donngonz@name.com", image: "/react/photos/k.png", phone: "213-763-3692", title: "Donnie Gonzalez", label: "Donnie Gonzalez" },
        { id: 42, parent: 35, description: "Chief of Staff, Software Client", email: "loriande@name.com", image: "/react/photos/z.png", phone: "863-858-4799", title: "Lori Anderson", label: "Lori Anderson" },
        { id: 43, parent: 1, description: "Sr. Distinguished Engineer, Software Base Team", email: "lindwong@name.com", image: "/react/photos/x.png", phone: "201-925-1897", title: "Linda Wong", label: "Linda Wong" },
        { id: 44, parent: 1, description: "GM, Platforms Business Management", email: "bonnvald@name.com", image: "/react/photos/c.png", phone: "954-517-9979", title: "Bonnie Valdez", label: "Bonnie Valdez" },
        { id: 45, parent: 0, description: "President, Entertainment & Devices Division", email: "josegips@name.com", image: "/react/photos/v.png", phone: "817-350-5277", title: "Joseph Gipson", label: "Joseph Gipson" },
        { id: 46, parent: 45, description: "VP, Media", email: "chriwaug@name.com", image: "/react/photos/b.png", phone: "323-924-6542", title: "Christine Waugh", label: "Christine Waugh" },
        { id: 47, parent: 46, description: "GM, Media", email: "johnburr@name.com", image: "/react/photos/n.png", phone: "864-334-6496", title: "John Burris", label: "John Burris" },
        { id: 48, parent: 45, description: "CFO & VP, Entertainment", email: "ashlcaud@name.com", image: "/react/photos/m.png", phone: "785-468-7480", title: "Ashley Caudill", label: "Ashley Caudill" },
        { id: 49, parent: 48, description: "VP, Console Partnerships", email: "davigift@name.com", image: "/react/photos/q.png", phone: "334-547-2141", title: "David Gift", label: "David Gift" },
        { id: 50, parent: 48, description: "VP, TV Division", email: "patrmitc@name.com", image: "/react/photos/w.png", phone: "571-291-9887", title: "Patrick Mitchell", label: "Patrick Mitchell" },
        { id: 51, parent: 48, description: "Controller, Entertainment & Devices Division", email: "fernbook@name.com", image: "/react/photos/u.png", phone: "978-242-7739", title: "Fern Booker", label: "Fern Booker" },
        { id: 52, parent: 45, description: "VP, Experiences & Design for Gaming and Entertainment", email: "steplowe@name.com", image: "/react/photos/i.png", phone: "803-432-1532", title: "Stephen Lowe", label: "Stephen Lowe" },
        { id: 53, parent: 52, description: "VP, Gaming and Console Platform Group", email: "ellemurp@name.com", image: "/react/photos/o.png", phone: "478-221-9308", title: "Ellen Murphy", label: "Ellen Murphy" },
        { id: 54, parent: 52, description: "GM, Console Live Service Group", email: "delocoff@name.com", image: "/react/photos/s.png", phone: "404-628-7275", title: "Delores Coffman", label: "Delores Coffman" },
        { id: 55, parent: 45, description: "VP, Retail Sales & Marketing", email: "jerrspur@name.com", image: "/react/photos/d.png", phone: "305-819-4910", title: "Jerry Spurlock", label: "Jerry Spurlock" },
        { id: 56, parent: 55, description: "VP, Entertainment & Devices", email: "chriwatt@name.com", image: "/react/photos/f.png", phone: "248-522-9731", title: "Chris Watts", label: "Chris Watts" },
        { id: 57, parent: 55, description: "VP, Retail Sales & Marketing", email: "davikell@name.com", image: "/react/photos/g.png", phone: "415-951-2949", title: "David Kelley", label: "David Kelley" },
        { id: 58, parent: 55, description: "GM, Entertainment & Devices Division", email: "edgawalk@name.com", image: "/react/photos/h.png", phone: "302-269-0651", title: "Edgar Walkup", label: "Edgar Walkup" },
        { id: 59, parent: 45, description: "Sr. VP, Mobile & Embedded Devices & Communications Sector", email: "thomdavi@name.com", image: "/react/photos/j.png", phone: "313-722-8638", title: "Thomas Davidson", label: "Thomas Davidson" },
        { id: 60, parent: 59, description: "VP, Communications Sector", email: "ignawidm@name.com", image: "/react/photos/k.png", phone: "501-490-8654", title: "Ignacio Widmer", label: "Ignacio Widmer" },
        { id: 61, parent: 59, description: "VP, Mobile and Embedded Device Marketing", email: "larrbell@name.com", image: "/react/photos/q.png", phone: "260-704-4745", title: "Larry Bell", label: "Larry Bell" },
        { id: 62, parent: 59, description: "VP, Devices", email: "randshie@name.com", image: "/react/photos/r.png", phone: "360-354-7598", title: "Randy Shields", label: "Randy Shields" },
        { id: 63, parent: 59, description: "CFO, Mobile & Embedded Devices & Communications Sector Division", email: "sarahayn@name.com", image: "/react/photos/p.png", phone: "443-487-7347", title: "Sarah Haynes", label: "Sarah Haynes" },
        { id: 64, parent: 45, description: "VP, Interactive Entertainment Business", email: "bettphil@name.com", image: "/react/photos/a.png", phone: "443-564-5549", title: "Bettyann Phillips", label: "Bettyann Phillips" },
        { id: 65, parent: 64, description: "GM, Global Marketing", email: "saraceba@name.com", image: "/react/photos/s.png", phone: "701-385-7537", title: "Sara Ceballos", label: "Sara Ceballos" },
        { id: 66, parent: 64, description: "GM, New Media & Franchise Development", email: "lucimcdu@name.com", image: "/react/photos/d.png", phone: "716-308-1312", title: "Lucius McDuffy", label: "Lucius McDuffy" },
        { id: 67, parent: 64, description: "GM, Name Game Studios", email: "nicomcga@name.com", image: "/react/photos/f.png", phone: "315-837-8910", title: "Nicole McGahey", label: "Nicole McGahey" },
        { id: 68, parent: 64, description: "GM, Entertainment & Devices", email: "rickbron@name.com", image: "/react/photos/l.png", phone: "323-877-8571", title: "Ricky Bronk", label: "Ricky Bronk" },
        { id: 69, parent: 45, description: "VP, Consumer Productivity eXperierences Division", email: "doripont@name.com", image: "/react/photos/z.png", phone: "916-418-3715", title: "Doris Ponte", label: "Doris Ponte" },
        { id: 70, parent: 69, description: "GM, North America Operations", email: "samutibb@name.com", image: "/react/photos/x.png", phone: "406-881-5323", title: "Samuel Tibbs", label: "Samuel Tibbs" },
        { id: 71, parent: 69, description: "GM, Entertainment & Devices Localization and Shared Services", email: "jamerede@name.com", image: "/react/photos/b.png", phone: "612-866-4856", title: "James Reder", label: "James Reder" },
        { id: 72, parent: 69, description: "GM, Consumer Software", email: "marymcle@name.com", image: "/react/photos/n.png", phone: "707-784-6254", title: "Mary McLendon", label: "Mary McLendon" },
        { id: 73, parent: 69, description: "GM, Macintosh Business Unit", email: "versalle@name.com", image: "/react/photos/q.png", phone: "810-371-1010", title: "Versie Allen", label: "Versie Allen" },
        { id: 74, parent: 69, description: "GM, Hardware", email: "dianwill@name.com", image: "/react/photos/w.png", phone: "520-287-8249", title: "Diann Williamson", label: "Diann Williamson" },
        { id: 75, parent: 0, description: "Sr. VP, General Counsel & Secretary", email: "florbutt@name.com", image: "/react/photos/e.png", phone: "802-214-1030", title: "Florence Butts", label: "Florence Butts" },
        { id: 76, parent: 75, description: "VP & Deputy General Counsel, Platforms Products & Services", email: "davihedb@name.com", image: "/react/photos/r.png", phone: "801-316-7533", title: "David Hedberg", label: "David Hedberg" },
        { id: 77, parent: 75, description: "VP & Deputy General Counsel, IP & Licensing", email: "brucclif@name.com", image: "/react/photos/t.png", phone: "918-485-2318", title: "Bruce Clift", label: "Bruce Clift" },
        { id: 78, parent: 77, description: "GM, Business Development", email: "josemeis@name.com", image: "/react/photos/y.png", phone: "760-672-2080", title: "Josephine Meister", label: "Josephine Meister" },
        { id: 79, parent: 77, description: "GM, Patents & IP", email: "branarms@name.com", image: "/react/photos/u.png", phone: "832-496-0315", title: "Brandon Armstrong", label: "Brandon Armstrong" },
        { id: 80, parent: 77, description: "GM, Corporate Standards", email: "bertruck@name.com", image: "/react/photos/i.png", phone: "773-719-3488", title: "Berta Rucker", label: "Berta Rucker" },
        { id: 81, parent: 75, description: "VP, & Deputy General Counsel", email: "arthbuck@name.com", image: "/react/photos/o.png", phone: "724-244-6527", title: "Arthur Buck", label: "Arthur Buck" },
        { id: 82, parent: 75, description: "Deputy General Counsel, Antitrust", email: "jameturn@name.com", image: "/react/photos/p.png", phone: "620-362-3063", title: "James Turner", label: "James Turner" },
        { id: 83, parent: 75, description: "VP & Deputy General Counsel, Business Division", email: "michharr@name.com", image: "/react/photos/a.png", phone: "508-241-0717", title: "Michelle Harr", label: "Michelle Harr" },
        { id: 84, parent: 75, description: "Deputy General Counsel, Office of Legal Compliance", email: "demekenn@name.com", image: "/react/photos/s.png", phone: "239-878-8236", title: "Demetrice Kenney", label: "Demetrice Kenney" },
        { id: 85, parent: 75, description: "VP, & Deputy General Counsel", email: "markbarr@name.com", image: "/react/photos/d.png", phone: "312-485-4776", title: "Mark Barreto", label: "Mark Barreto" },
        { id: 86, parent: 75, description: "Deputy General Counsel, Law & Corporate Affairs (LCA) Operations", email: "jennhurt@name.com", image: "/react/photos/f.png", phone: "503-355-4165", title: "Jennifer Hurtt", label: "Jennifer Hurtt" },
        { id: 87, parent: 75, description: "VP & Deputy General Counsel, Worldwide Sales", email: "chrimaur@name.com", image: "/react/photos/g.png", phone: "727-426-1652", title: "Christopher Mauro", label: "Christopher Mauro" },
        { id: 88, parent: 75, description: "VP & Deputy General Counsel, Global Corporate Affairs", email: "paulmcki@name.com", image: "/react/photos/h.png", phone: "603-446-2403", title: "Paul McKissick", label: "Paul McKissick" },
        { id: 89, parent: 75, description: "VP & Deputy General Counsel, Entertainment & Devices", email: "janehamm@name.com", image: "/react/photos/j.png", phone: "903-296-5810", title: "Jane Hammond", label: "Jane Hammond" }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
