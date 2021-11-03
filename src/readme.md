  

---

![enter image description here](https://innovatein48r.blob.core.windows.net/innovate/MainPage.png)

---

  
  

## Team and Solution

  

We are the **AutoUI_Wizards**.  Our team consists of Rajiv Ramanjani(e3000527), Sheik Ahamed Seerajudeen(e3005132) , Shefali Garg (e5585456), Harsh Sharma (e5641188) and Yogendra Singh Katheria (e5572102).

  

Our solution is called **'AutoUI_ML'**.

  

---
## Background
 
  
Current conventional Automation tools are tightly coupled with a framework, which in turn makes it necessary for the teams using the solution to understand the framework, have the programming knowledge to automate and write the scripts. Teams spent considerable time in analyzing the application user interface, identify necessary locators and write the scripts for automating the process. This is a time and efforts consuming process. Any new enhancements or debugging involves backtracking the changes in the user interface and making the corresponding changes in scripts to make automation scripts run.  
  
Addressing to these challenges with current models for UI Automation and with wide spread wings of Artificial Intelligence and Machine Learning algorithms we have come up with Autonomous Solution exclusively for UI Automation- AutoUI_ML.
  

## Problem

-  **Changing UI Continuously** 

Considering the latest technologies emerging these days web applications need regular upgrades. This involves a lot of change. This change can be related to any new version, integration with the third party tools or maybe sometimes, there are new functionalities that we want to implement in our web apps.  This could lead to missing out on enhancing the UI tests in a way that can be utilized later.

  

-  **Increasing Complexity of Testing Web Elements**

Latest web functionalities that we implement in our web applications can include various web elements. Those elements can be embedded frames and other products as well. Sometimes, large enterprise websites contain complex flowcharts, diagrams, maps, etc. These make the website’s UI test automation complex.

  

-  **Handling Multiple Errors**

Error handling has been an issue with UI automation testing. Whenever there are complex UI test scenarios with tight deadlines, most time is utilized in creating UI test scripts. Thus, testers choose manual testing over automation for UI testing. Having said that, error handling becomes extremely difficult when you manually revoke the error messages and automate the same.

  

-  **Choosing a Random Automated UI Testing Tool**

Well, here is where the most enterprises suffer. There are numerous test automation tools available in the industry. In fact, there are certain tools that showcase themselves specialized in UI automation testing. However, when you try them : you realize that they don't meet your needs and you will end up wasting your time and efforts. But, maybe due to budget constraints or project complexities, the enterprises end up choosing incorrect tools.

  

-  **Maintaining Automated UI Scripts**

What happens in UI automated test scripts is, that it is difficult to maintain. Web developers often make changes to UI rather to the logic of the features and functionalities. With this, the UI test scripts fail each time there are new changes to the UI. Hence, maintenance of the UI scripts has been a challenge for long.

  

-  **Creating Effective UI automation tests take time**

Everybody is talking about automating tests at DevOps speed. But, this does not affect creating UI automated tests as it takes a great deal of time and patience. Also, you know that there are a few tools that do not support recorded UI automation tests. This creates challenges for developing automated test scripts for UI, effectively.

  

-  **Calculating ROI for UI automation**

This is a real challenge for the enterprises. UI keeps on changing, the tests will change accordingly. It will double the time that UI automation testing will take, delaying the process of delivery. Though test automation always comes with justified ROI attached. But, how will we calculate direct ROI for UI automation testing?

  

-  **Reviewing Quality Code standards**

Each developer involved in developing an application will have different coding and code commenting styles. This makes it difficult for other developers as well as testers to review it sooner or later for modifications or maintenance. Already, creating UI automated tests took time and without maintaining the coding standards, it will be extremely challenging to review or modify it sooner or later.

  



  



  



  
  

## Solution Features and Workflow

	- Automating UI testing

	- Automates from the beginning with minimum inputs and also automates the extraction of elements and flows

	- Bringing AI/ML for maintenance and analytics while handling the changes

	- Interactive Dashboard to represent results

**Autonomous UI Testing Workflow**


- The Code will navigate all the screens, identify all web elements, and create all flows.  
- Next time when there is some change in UI and user wants to run some test suites for the updated UI, our application will extract all the elements from the updated UI, and using Deep learning it will identify the similar elements which can be updated in the test suite so that it wont fail and will run the updated test suites automatically  
- It will list out all the failed and passed cases of the new updated UI and will take user inputs as a feedback to train the model further to get better over time.

![enter image description here](https://innovatein48r.blob.core.windows.net/innovate/Flow1.png)

---
![enter image description here](https://innovatein48r.blob.core.windows.net/innovate/Flow2.png)
---
**Deep Learning Implementation of Self Healing**

- We have extracted locators of HTML elements from multiple websites consisting a total of approximately 8000 records.

- We have trained a Seq to Seq Deep Learning Model (ULM Fit) using Azure ML on the data.

- ULM Fit is used here to make the model understand the semantics of HTML locators.

- Model is then fine tuned to find the similarity between the two HTML locators.

- Model is used for self healing to recognize the changes in the recorded UI Screen and provides the similarity score on the basis of the comparison.

  

![enter image description here](https://innovatein48r.blob.core.windows.net/innovate/Flow3.png)



  

  



  

  

  




## New Technology
  
- We have used the state of the art method (ULM Fit) to train a deep learning model for downstream classification task.  
	
- ULM fit method makes the model to understand the structural and contextual information of any language (sequence). Here we are using the same to learn the structure of html locators  
	
- Further fine tuning the model makes it easier and accurate to predict (similarity between html locators in our case)
- We are using self-healing which is a very new concept which involves usage of AI/ML in automating UI testing. This has been implemented in a way that every time there is a change in UI, the test suites will be updated automatically.  This will reduce a lot of manual effort so that developers can use there time for other important stuff.

## Why our solution is cool

  

  

 - No manual efforts required to analyze the application structure
 - No manual efforts to understand the framework and no coding knowledge is required
 - The solution automates the process of identifying all the different web elements
 - It also automates the process to identify all the flows and navigation within a screen and across multiple screens   
 - Machine learning module makes the solution more robust and helps in achieving self-healing eliminating
   manual maintenance efforts
  - Interactive dashboards helps analyze various aspects of the solution outputs

  

  


  

## Wow Factor

  

- AI is used to self Heal the changes changes in the UI.

- Whole process of screen recording and Testing the Flows is automated.

- Minimum inputs for subsequent Testing

- We provide a interactive dashboard to view and interpret the results
  

## Novelty and relevance to FIS and its clients
> FIS already has GATS and SAFAL as two automation frameworks.  Both these solutions have scripted automated UI testing.  These scripts take a lot of time to build

> Our solution adds a flavor of **autonomous script-less** UI testing which can amplify the benefits manifold

>This solution is built entirely in-house : hence FIS can save a lot on costs of buying an external solution 

>External clients like JPMC, who leverage GATS, have already expressed a need for an autonomous UI testing solution that has self-healing.  This solution could bring in revenue to FIS

>Many internal teams like MBP, IBS etc. could benefit from this solution thereby giving a lot of cost savings

  
  


  

## Benefits

     >Cost savings in terms of man hours spent to do testing is significant
     
     >Training cost is reduced as the solution is framework agnostic

	 >Testers with less specialized coding background can be leveraged - thereby saving on hiring costs
  
|Description  |Savings  |
|--|--|
| Conventional Model(Hrs)|60  |
| AutoUI_ML Model(Hrs) |  23.5|
| Efforts Savings(Hrs) | 36.5 |
| Efforts Savings Percentage | 60.5% |
| Savings $ | $525 |  

## Technology Stack

![enter image description here](https://innovatein48r.blob.core.windows.net/innovate/AutoUI.png)
  

Pytorch for Deep Learning, Python, Dash based on Flask, Selenium,

Azure ML, Cuda, Celery, Redis, CSS, HTML

#### Code Written In

  

- Python

  



  

#### Open Source and Proprietary

  

- Open Source - Pytorch, Selenium, Fastai

  

- Proprietary - Azure Cloud Services

  

  

---

  



  

### Bit Bucket Location

  

  

  

- https://bitbucket.fis.dev/projects/IN48R2021/repos/autoui-wizards/browse

  

  

---