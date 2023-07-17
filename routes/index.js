var express = require('express');
var router = express.Router();

const nameList =[
  {'id': 1, 'Term': 'DevOps', 'Description': 'the DevOps approach, traditionally siloed development and operations teams work together throughout the entire software development lifecycle, from planning and coding to testing, deployment, and maintenance.' , 'References': 'Leite, L., Rocha, C., Kon, F., Milojicic, D. and Meirelles, P., 2019. A survey of DevOps concepts and challenges. ACM Computing Surveys (CSUR), 52(6), pp.1-35.'},
  {'id': 2, 'Term': 'Software engineering', 'Description': 'Software engineering is a discipline that encompasses the principles, methods, and practices used to design, develop, test, deploy, and maintain software systems.' , 'References': 'Glass, R.L., Vessey, I. and Ramesh, V., 2002. Research in software engineering: an analysis of the literature. Information and Software technology, 44(8), pp.491-506.'},
  {'id': 3, 'Term': 'Networking', 'Description': 'Computer networks refer to the interconnected systems of computers and other devices that enable communication and data exchange' , 'References': 'Peterson, L.L. and Davie, B.S., 2007. Computer networks: a systems approach. Elsevier.'},
  {'id': 4, 'Term': 'Cyber Security', 'Description': 'Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access, use, disclosure, disruption, modification, or destruction' , 'References': 'Craigen, D., Diakun-Thibault, N. and Purse, R., 2014. Defining cybersecurity. Technology Innovation Management Review, 4(10).'},
  {'id': 5, 'Term': 'Cloud engineering', 'Description': 'Cloud engineering is a discipline that focuses on the design, development, deployment, and management of cloud-based solutions and infrastructure' , 'References': 'Harman, M., Lakhotia, K., Singer, J., White, D.R. and Yoo, S., 2013. Cloud engineering is search based software engineering too. Journal of Systems and Software, 86(9), pp.2225-2241.'},
  {'id': 6, 'Term': 'Developer', 'Description': 'It refers to the overall experience that a user has when interacting with a product, system, or service' , 'References': 'Linberg, K.R., 1999. Software developer perceptions about software project failure: a case study. Journal of systems and software, 49(2-3), pp.177-192.'},
  {'id': 7, 'Term': 'SQL developer', 'Description': 'It provides an integrated development environment (IDE) for working with SQL databases, allowing developers to interact with the database, write SQL queries, and manage database objects' , 'References': 'Narayanan, A., 2016. Oracle SQL Developer. Packt Publishing Ltd. '},
  {'id': 8, 'Term': 'Business Analyst', 'Description': 'A professional who acts as a bridge between business stakeholders and the IT team to identify, analyze, and define business needs and recommend solutions' , 'References': 'Gregorio, D.D., 2012, March. How the Business Analyst supports and encourages collaboration on agile projects. In 2012 IEEE International Systems Conference SysCon 2012 (pp. 1-4). IEEE.  '},
  {'id': 9, 'Term': 'Data Analyst', 'Description': 'A professional who collects, analyzes, and interprets large sets of data to derive meaningful insights and inform decision-making within an organization' , 'References': 'Wickham, H. and Wickham, H., 2016. Data analysis (pp. 189-201). Springer International Publishing. '},
  {'id': 10, 'Term': 'Data Scientist', 'Description': 'A professional who applies scientific methods, algorithms, and programming skills to extract knowledge and insights from complex and large datasets' , 'References': 'Davenport, T.H. and Patil, D.J., 2012. Data scientist. Harvard business review, 90(5), pp.70-76.'},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', names: nameList });
});

module.exports = router;
