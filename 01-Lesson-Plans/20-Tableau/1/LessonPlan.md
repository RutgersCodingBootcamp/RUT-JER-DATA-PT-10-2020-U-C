# 20.1 Introduction to Tableau

## Overview

Today's lesson will introduce students to the powerful data visualization tool known as Tableau and many of its built-in functions.

- - -

## Class Objectives

* Students will be able to import various data sources, including CSV files and Excel spreadsheets, into Tableau.
* Students will be able to perform joins on multiple data sources.
* Students will be able to create basic visualizations in Tableau.
* Students will be able to customize their visualizations.
* Students will be able to create story boards in Tableau.

## Instructor Prep

<details>
  <summary><strong>Instructor Notes</strong></summary>

* Tableau Desktop comes in two versions: Public and Professional. The version students will officially install is Tableau Desktop Public. This version can open Tableau workbook files only if the data have been uploaded to Tableau's public server. Likewise, workbooks may be saved only by uploading its contents to Tableau's server as well.

* Tableau Desktop Professional does not have these restrictions, and offers a 14-day trial period. It is a separate download from the Public version. Students may find this version handy for their final project, although it is by no means required.

* In order to use Tableau Desktop Public, you will need to download and install the software. You will also need to set up an account.

* The workbooks you will work with have the `.twbx` extension. If you choose to work with the professional version of the application, files with the `.twb` extension are available in the `Extra_Content` directory. Also available in that directory are packaged `.twbx` workbooks that are compatible with Tableau Professional.

* Please reference our [Student FAQ](../../../05-Instructor-Resources/README.md#unit-20-tableau) for answers to questions frequently asked by students of this program. If you have any recommendations for additional questions, feel free to log an issue or a pull request with your desired additions.

</details>

<details>
  <summary><strong>Sample Class Video</strong></summary>

* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=abe2633e-7916-464c-ac67-a88601844b38)

</details>

- - -

# Class Activities

## 1. Welcome & Intro to Tableau

| Activity Time:       0:20 |  Elapsed Time:      0:20  |
|---------------------------|---------------------------|

<details>
  <summary><strong> 📣 1.1 Instructor Do: Welcome Class (0:02)</strong></summary>

* Inform the class that, while certain parts of using Tableau can be challenging, this week will be mostly free of programming. Instead, the focus will be on exploring and visualizing data.

* Tableau is widely used by corporations to help visualize/organize their data.

</details>

<details>
  <summary><strong> 📣 1.2 Instructor Do: Introduction to Tableau (0:03) </strong></summary>

* Tableau is an extremely powerful business intelligence application that allows its users to create in-depth visualizations in very little time.

    ![Tableau Logo](Images/01-IntroTableau_Logo.png)

  * Like Microsoft Excel, Tableau focuses extensively on allowing its users to manipulate tables of data and create visualizations without any need for additional programming.

  * Tableau also utilizes a drag-and-drop style interface so that its users can very easily create tables, charts, and perform analysis with little difficulty.

* Take a moment to point out the [gallery](https://public.tableau.com/en-us/s/gallery) of projects that Tableau users have created.

  ![Tableau Gallery](Images/02-Installation_Gallery.png)

  * One of Tableau's features is the ability to share projects and visualizations with one's community.

  * Not only can visualizations be shared on the Tableau site, they can also be embedded on webpages.

  * Point out how varied and interesting many of these projects within the gallery are. These are all things that users can create using Tableau upon mastering the software.

* Explain to the class that Tableau is essentially the "easy mode" of data visualization and that the class will be able to create many of their visualizations from the past in very little time using this application.

</details>

<details>
  <summary><strong> 🎉 1.3 Everyone Do: Tableau Installation (0:10)</strong></summary>

* Open up the web browser and navigate to the [Tableau Site](https://public.tableau.com), letting the class know that they will now be installing the free version of the application.

  ![Tableau Download](Images/02-Installation_PublicDownload.png)

* [Tableau Public](https://public.tableau.com) is a completely free version of the Tableau software that includes the majority of features included within [Tableau Desktop](https://www.tableau.com/products/desktop). The main difference between the two versions is in working with multiple types of data sources (SQL databases, for example), and in working with data files that are not shared with the public.

  * Inform students that they can also download and explore the 14-day trial version of the paid software, but that all assignments in this unit can be completed with the free version.

  * Downloading and installing the application is very simple. Students should type their email address into the box near the top of the webpage and then click on the "Download the App" button.

  * Once the application has been downloaded, simply click on the executable and install the software.

</details>

<sub>[Having issues with this activity? Report a bug!](https://bit.ly/2UTQySp)</sub>

## 2. Loading & Exploring Data

| Activity Time:       0:40 |  Elapsed Time:      1:00  |
|---------------------------|---------------------------|

<details>
  <summary><strong> 📣 2.1 Instructor Do: Loading and Exploring Data (0:05)</summary></strong>

* Now that everyone in the class has installed Tableau, open up the application and explain how many different data sources can be connected to it.

  ![Data Sources](Images/03-LoadingData_DataSources.png)

  * Not only is Tableau able to connect to data files - like CSV, XLS, and JSON - it is also able to connect to a multitude of servers - like MySQL, MongoDB, and Google Cloud.

  * What makes this noteworthy is how Tableau allows users to mix and match data from vastly different sources without the need to translate them into something like a Pandas DataFrame. The loading, exploration, and manipulation of data is all built-in.

* Select "Excel" from the list of data sources available and load up [GlobalSuperstoreOrders2016.xlsx](Activities/01-Ins_LoadingData/Resources/GlobalSuperstoreOrders2016.xlsx) within Tableau.

  ![Tableau Tables](Images/03-LoadingData_Table.png)

  * After the data has been imported into Tableau, explain how individual sheets from the original Excel workbook need to be dragged from the navigator into the main application.

* Do this with the `Orders` sheet and then point out how, once the data has been loaded, a preview is provided in the main area of the application.

  ![Images/load02.gif](Images/load02.gif)

* It is important to point out how Tableau does not allow its users to change the values contained within the cells of a dataset but it is possible to create new columns based upon the values of other columns.

  * Any and all changes made to the dataset within Tableau will not affect the original dataset. The purpose of Tableau is to create visualizations: manipulating data is not its strong-suit.

* Filtering data is very simple, however, as all Tableau users need to do is click on the "Add" button beneath the `Filters` text in the top-right corner of the application and select what column they would like to filter by.

  ![Filter Column](Images/03-LoadingData_FilterColumn.png)

  * After selecting which column to filter by, the values to filter are then chosen manually or based upon some kind of condition.

    ![Filter Values](Images/03-LoadingData_FilterValues.png)

  * Depending upon the data-type stored within a column, different filters may or may not be available. Selecting a column with a "Date" data-type, for example, allows users to filter rows based upon date ranges.

    ![Filter Dates](Images/03-LoadingData_FilterDate.png)

</details>

<details>
  <summary><strong> 📣 2.2 Instructor Do: Building Basic Visuals (0:10) </strong></summary>

* Create a new Tableau project and connect it with the [GlobalSuperstoreOrders2016.xlsx](Activities/02-Ins_BasicVisuals/Resources/GlobalSuperstoreOrders2016.xlsx) file provided. Then drag the `Orders` sheet into the main area.

* Once a dataset has been linked to a Tableau workbook, users can navigate into and edit individual worksheets at the bottom of the application.

  ![Worksheets Panel](Images/05-BasicVisuals_Worksheets.png)

* Creating visualizations in Tableau is nearly identical to creating pivot tables in Excel. Users click and drag the headers of their original dataset into specific fields - Columns, Rows, Filters, etc. - in order to create a chart.

  ![Tableau Chart Screen](Images/05-BasicVisuals_ChartArea.png)

* Quickly explain the difference between `Dimensions` and `Measures` to the class. `Dimensions` are categorical fields that data can be split up by. `Measures` are the metrics or numbers that users would like to analyze.

* Drag the `Category` pill from the `Dimensions` panel into `Rows` to show the class how a small table containing the three categories within the dataset is created.

* By dragging `Segment` into `Rows` and placing it after the `Category` pill, the table is made slightly more complex. Now each category within the visualization has been split into three distinct parts.

  ![Images/load03.png](Images/load03.png)

* Dragging "Quantity" from the `Measurements` panel and placing it within `Columns` finally creates a true visualization: a bar chart showing the quantity of orders per segment per category.

  ![Images/load04.png](Images/load04.png)

  * Tableau has automatically aggregated `Quantity` into a sum. This will be discussed in greater detail.

* The chart can then be made more detailed by adding more elements. By adding `Market` into `Columns`, for example, multiple charts are created to show the quantity of orders per segment per category within each geographic market.

  ![Images/load05.png](Images/load05.png)

* Creating visualizations within Tableau really is as simple as that. Simply click and drag the elements that should be visualized into respective fields and Tableau will automatically create a visual based upon them.

  * If users would like to change what kind of visualization to employ, all they need to do is click the `Show Me` button at the top-right of the application and select the charting style desired.

    ![Show Me](Images/05-BasicVisuals_ShowMe.png)

* Create a new worksheet within Tableau. Drag `Sales` into the `Rows` section.

  ![Images/load06.png](Images/load06.png)

  * Point out that a bar chart was created that visualizes the total sales made by the company in question. This is because the `Sales` pill is being measured by its sum by default.

* The type of calculation performed on a `Measures` pill can be changed by clicking on the pill, selecting "Measure" from the drop-down menu, and then picking one of the calculation types present.

  ![Change Measures](Images/05-BasicVisuals_Measures.png)

* Now drag `Order Date` into the `Columns` field to create a very basic line chart.

  ![Images/load07.png](Images/load07.png)

* Point out to the class how Tableau has aggregated the dates at the year level. In order to expand this to include quarters, simply click on the plus symbol within the `YEAR` pill.

    ![Line Graph](Images/05-BasicVisuals_LineGraph.png)

  * Explain that Tableau, by default, visualizes at the **least** granular level. In this case, it displays the yearly results by default.

* In order to compare how Q1 has performed over the years, simply move the `QUARTER` pill before `YEAR`.

    ![Line Graph Pivot](Images/05-BasicVisuals_LineGraphPivot.png)

* Explain to the class how the best way to learn Tableau is to dive into the application and test it out manually.

</details>

<details>
  <summary><strong> ✏️ 2.3 Students Do: Explore Data (0:15)</strong></summary>

* In this activity, students will be given visualizations, which they will attempt to recreate using Tableau.

* **Instructions**:

  * [Readme.pdf](Activities/03-Stu_Exploration/Unsolved/Readme.pdf)

</details>

<details>
  <summary><strong> ⭐ 2.4 Review: Explore Data (0:05)</strong></summary>

* **File**: [Activities/03-Stu_Exploration/Solved/sales.twbx](Activities/03-Stu_Exploration/Solved/sales.twbx)

* The first visualization, of the customers with the highest sales, requires dragging the `Customer Name` pill to Rows, and the `Sales` pill to Columns.

  ![Images/explore01.png](Images/explore01.png)

  * Clicking on the arrow on the `Sales` pill, selecting `Measure`, then `Sum` aggregates the data into a sum.

* To sort the data, click on the sort button:

  ![Images/explore02.png](Images/explore02.png)

* In the next tab, in order to chart the most profitable customers, simply do the same as above, this time with the `Profit` pill:

  ![Images/explore03a.png](Images/explore03a.png)

* To adjust the axis at the bottom, right click at the bottom along the axis, and select `Edit Axis`:

  ![Images/explore03b.png](Images/explore03b.png)

* After filtering out negative profit figures, the chart should now look like this:

  ![Images/explore03c.png](Images/explore03c.png)

* And to chart the states with the highest average profit, choose the `Profit` pill again, then `Average` under `Measure`:

  ![Images/explore04.png](Images/explore04.png)

  ![Images/explore05.png](Images/explore05.png)

* The filter should be set to the United States:

  ![Images/explore06.png](Images/explore06.png)

* Next, to display a monthly timeline, drag the `Sales` pill to Rows, then obtain its sum. Then drag `Order Date` to columns.

  ![Images/explore07.png](Images/explore07.png)

* This, however, is not what we want. There are several ways to drill down to the monthly level. One is to click on the `+` symbol on the `YEAR (Order Date)` pill, then getting rid of undesired levels. The other is to click on the arrow in the pill and select `Month`:

  ![Images/explore08.png](Images/explore08.png)

  ![Images/explore09.png](Images/explore09.png)

* Finally, to visualize profit by region and product category, drag `Category` and `Region` pills to Columns, and create a sum of the `Profit` pill in Rows:

  ![Images/explore10.png](Images/explore10.png)

* The side-by-side bar chart can be created by clicking on the `Show Me` option (Note: The box might not be highlighted, but the worksheet will change to a side-by-side bar chart.): 

  ![Images/explore11.png](Images/explore11.png)

</details>

<sub>[Having issues with this activity? Report a bug!](https://bit.ly/2JTe3EM)</sub>

## 3. No Show Tableau Visualization

| Activity Time:       0:30 |  Elapsed Time:      1:30  |
|---------------------------|---------------------------|

<details>
  <summary><strong> ✏️ 3.1 Students Do: No Show Tableau Visualization (0:20)</strong></summary>

* Students will now spend some time creating a series of visualizations that will answer some questions as to what kinds of people are more/less likely to show up to doctor's appointments.

    ![No Show Ages](Images/06-NoShows_AgeAppointments.png)

* **File:**

  * [no_shows.csv](Activities/04-Stu_NoShow_Visualization/Resources/no_shows.csv)

* **Instructions:**

  * Create a line chart that compares the ages of patients against the total number of appointments. Then split this graph based upon gender and whether the patient showed up to their appointment. For this first step, you'll need to convert `Age` from a measure to a dimension.

  * Create a pair of bar charts that compare how many patients showed up to appointments versus how many were no-shows in different neighborhoods.

  * Create a stacked bar chart that compares no-shows to those who made it to appointment based upon the day of the week.

  * Create a pair of line graphs that compare age versus diabetes in both men and women.

  * Create a pair of line graphs that compare age versus alcoholism in both men and women.

* **Bonus:**

  * Figure out how to create filters and manually exclude non-significant values from your charts using the `Filters` panel.

  * Now, using filters, modify your charts so that they are more visually understandable.

</details>

<details>
  <summary><strong> ⭐ 3.2 Review: No Shows (0:10)</strong></summary>

* Open up [04-Stu_NoShow_Visualization](Activities/04-Stu_NoShow_Visualization/Solved/no_shows.twbx) within Tableau and walk through the application with the class, answering whatever questions students may have.

* The first step for this activity is to drag `Age` to Columns, and `no_show.csv (Count)` to Rows. `Age` must also be converted from measure into dimension by clicking on the arrow on the pill.

  ![Images/noshow01.png](Images/noshow01.png)

* To split up the results by gender, drag `Gender` into Rows:

  ![Images/noshow02.png](Images/noshow02.png)

  * Male patients, overall, seem to have fewer appointments across age groups!

* Finally, to stratify the results by no-show appointments, drag `No-show` to columns:

  ![Images/noshow03.png](Images/noshow03.png)

* In the next visualization, students were asked to compare no-shows by neighborhood. This can be done in the following way:

  ![Images/noshow04.png](Images/noshow04.png)

  * `No-show` and `no_show.csv (Count)` are dragged to Columns, and `Neighbourhood` to Rows.

* It can also be visualized thus:

  ![Images/noshow05.png](Images/noshow05.png)

  * `No-show` is moved to Rows instead of Columns.

* In the next visualization, students were asked to visualize the number of no-show patients by the day of the week:

  ![Images/noshow07.png](Images/noshow07.png)

* Since we're counting the number of no-show appointments, it makes sense to to drag `No-show` to Rows, and visualize this measure vertically. And since we're tallying the number of no-shows by the day of the week, to drag `Scheduled Day` into Columns:

  ![Images/noshow06.png](Images/noshow06.png)

* However, this isn't quite what we want. We're shown results by year, instead of the day of the week. This can be selected by clicking on the arrow on the `Scheduled Day` pill, More, then Weekday.

  ![Images/noshow07.gif](Images/noshow06.png)

* To display a bar chart instead of a line chart, select `Show Me`, then the stacked bar chart option:

  ![Images/noshow07.png](Images/noshow08.png)

* In the next visualization, students are asked to display the number of diabetics by gender and across age groups. One way to visualize this is by stacking `Gender` in Rows.

  ![Images/noshow09.png](Images/noshow09.png)

* The final visualization is very similar to the previous one, visualizing alcoholism instead of diabetes.

  ![Images/noshow10.png](Images/noshow10.png)

</details>

<sub>[Having issues with this activity? Report a bug!](https://bit.ly/2wp1bDv)</sub>

## 4. Joins & Splitting + FIFA

| Activity Time:       0:35 |  Elapsed Time:      2:05  |
|---------------------------|---------------------------|

<details>
  <summary><strong> 📣 4.1 Instructor Do: Joins and Splitting Made Easy (0:05)</strong></summary>

* Joins are an inescapable aspect of data science and are often thought to be both tedious and complex. Tableau, however, trivializes joins to such a degree that even complex joins can be performed in just a few clicks.

* Open up [GlobalSuperstoreOrders2016.xlsx](Activities/05-Ins_EasyJoins/Resources/GlobalSuperstoreOrders2016.xlsx) one more time within Tableau and drag the "Orders" sheet into the main area.

  * In order to merge these two datasets together, double click on the "Orders" button in the main area of Tableau, then click and drag the "People" sheet into to main area of Tableau alongside the "Orders" sheet.

  * Tableau will automatically create an inner join on the columns that contain matching values. In this case, the join is on the "Region" columns.

  * To change what type of join is used, simply click on the interlacing circles at the top of the application and select what form of join to use from the menu that appears. This same menu can be used to modify what columns to merge on.

    ![Join Menu](Images/07-EasyJoins_Menu.png)

* It is also possible to create joins across data sources.

  * To do this, click on the "Add" button in the `Connections` panel and add the secondary data source desired. For the purposes of this demonstration, that is [GlobalSuperstoreReturns2016.csv](Activities/05-Ins_EasyJoins/Resources/GlobalSuperstoreReturns2016.csv).

    ![Adding Connections](Images/07-EasyJoins_AddConnection.png)

  * After the data source has been added, it can then be joined with the other data files desired using the method mentioned before.

* Another interesting feature of Tableau is that columns containing text can be split so as to extract data.

  * To do this, select the column header whose values should be split, right click, and select "Custom Split" from the drop down menu.

  * Select what character to split the text on, whether to split from the beginning or end of the string, and then how many times the text should be split.

  * Show this off by splitting the "Order ID" column on the first hyphen one time. This will extract the state in which a sale was made from the initial string.

    ![Custom Split](Images/07-EasyJoins_CustomSplit.png)

  * New columns created this way can then be used when creating visualizations later on.

</details>

<details>
  <summary><strong> ✏️ 4.2 Students Do: FIFA Analysis (0:20)</strong></summary>

* Students will now create some tables based upon FIFA video game's player datasets. This will require them to merge multiple data sources together and then create visualizations off of the newly made dataset.

  ![Potential Vs Overall](Images/08-FIFA_PotentialVOverall.png)

* **Files:**

  * [PlayerPersonalData.csv](Activities/06-Stu_FIFA_Player_Analysis/Resources/PlayerPersonalData.csv)

  * [PlayerAttributeData.csv](Activities/06-Stu_FIFA_Player_Analysis/Resources/PlayerAttributeData.csv)

  * [PlayerPlayingPositionData.csv](Activities/06-Stu_FIFA_Player_Analysis/Resources/PlayerPlayingPositionData.csv)

* **Instructions:**

  * Create a join between each of the charts so that each player's data is matched up correctly.

  * Create a pair of charts that compare the potential of a club's players to their overall ability (`Overall` column). Then sort them from best to worst.

  * Create a chart that determines which soccer club is the most aggressive overall.

  * Create a chart that determines which nationality has the greatest acceleration on average, making sure to note how many players are from each nation in a second chart.

  * Create a chart that determines which nationality has the greatest long passing on average.

  * Create a chart that marks the potential of a player over time as they age.

</details>

<details>
  <summary><strong> ⭐ 4.3 Review: FIFA Analysis (0:10)</strong></summary>

* Open up [06-Stu_FIFAPlayers](Activities/06-Stu_FIFA_Player_Analysis/Solved/FIFA.twbx) within Tableau and walk through the application with the class.

* In order to join the two CSV files, drag them to the main pane in the `Data Source` tab, then, select an inner join:

  ![Images/fifa01.png](Images/fifa01.png)

* The first visualization is of each player's potential, as well as overall ability, sorted in descending order:

  ![Images/fifa02.png](Images/fifa02.png)

  * The `Potential` and `Overall` pills are dragged to Columns, and `Names` to Rows.

  * By default, players' potential and overall ability values be aggregated as sums, and will therefore exceed 100 for players with multiple rows. To correct for this, click on the pills, and from `Measure` choose `Average`.

  * The results are sorted in descending order. This must be done for each chart.

* The second visualization tallies the `Aggression` of each club.

  ![Images/fifa03.png](Images/fifa03.png)

  * This chart is simply an aggregation of the `Aggression` column, displayed by clubs in Rows.

  * In this case, it makes sense to aggregate the sum of aggression, comprising the total aggression ratings of all the players in a club.

* The next visualization is of average acceleration by country, as well as the number of rows from each country.

  ![Images/fifa04.png](Images/fifa04.png)

  * `Acceleration` is plotted against `Nationality` in the left chart.
  * In the right chart, the total `PlayerAttributeData.csv (Count)` is plotted against `Nationality`.

* The next visualization is of average long passing by country, as well as the number of players from that country.

  ![Images/fifa05.png](Images/fifa05.png)

  * This time, the two charts were stacked vertically (though they could have been placed horizontally, side by side, as well).

  * The bottom chart, Count of PlayerAttributeData.csv by Nationality, is a bar chart by default. To change it to a line chart, click on the `PlayerAttributeData.csv (Count)` pill and select "Line" under `Mark Type`.

* The next visualization plots age against potential:

  ![Images/fifa06.png](Images/fifa06.png)

* To be able to chart each age year as a discrete quantity, click on the `Age` pill and select `Dimension`.

  ![Images/fifa07.png](Images/fifa07.png)

</details>

<sub>[Having issues with this activity? Report a bug!](https://bit.ly/2UTQKkB)</sub>

- - -

## Break

| Activity Time:       0:15 |  Elapsed Time:      2:20  |
|---------------------------|---------------------------|

- - -

## 5. The Ultimate Candy

| Activity Time:       0:20 |  Elapsed Time:      2:40  |
|---------------------------|---------------------------|

<details>
  <summary><strong> 📣 5.1 Instructor Do: Sizing, Coloring, and Labels (0:05)</strong></summary>

* Students have likely noticed by now that there are panels on the left side of the application that they have yet to touch. These marks can be used in order to differentiate or add details to a chart's visuals.

  ![Images/sizing01.png](Images/sizing01.png)

  * `Color`: Modifies the colors of a chart so that elements are colored according to the values passed.

  * `Size`: Modifies the sizing of elements to that they are bigger or smaller depending upon the values passed.

  * `Label`: Places text next to points on a chart that correspond with the values passed.

  * `Detail` and `Tooltip`: Acts much like labels, but only appear when the cursor hovers over the associated point/element on a chart.

  * `Path` or `Shape`: Changes the path type or shape of an element/point depending upon the values passed. Changing the value of the drop-down will change whether path/shape is displayed.

* Explain to students that they can drag pills to these marks to create visual effects. They will have an opportunity to do just that in the next activity.

</details>

<details>
  <summary><strong> ✏️ 5.2 Students Do: The Ultimate Candy (0:10)</strong></summary>

* Students will now take some time to create charts that compare candies against one-another. The charts themselves are quite basic but will be made more complex using marks.

    ![Winning Chocolate Chart](Images/10-Candy_WinChocolate.png)

* **File:**

  * [candy-data.csv](Activities/07-Stu_UltimateCandy_Marks/Resources/candy-data.csv)

* **Instructions:**

  * Create a pair of bar graphs that chart the win percent of each candy, then color the bars according to whether they are fruity and/or chocolatey.

  * Create a scatter plot comparing the sugar percentage against the win percentage. Color the points based upon whether they are chocolatey and size them according to price.

  * Create one more scatter plot comparing the sugar percentage against the win percentage. Color the points based upon whether they are fruity and size them according to price.

</details>

<details>
  <summary><strong> ⭐ 5.3 Review: The Ultimate Candy (0:05)</strong></summary>

* Open up [07-Stu_UltimateCandy](Activities/07-Stu_UltimateCandy_Marks/Solved/ultimate_candy.twbx) within Tableau and walk through the application with the class, answering whatever questions students may have.

* The first visualization is a pair of bar graphs that chart the `Winpercent` of each candy:

  ![Images/candy01.png](Images/candy01.png)

  * The bars in the left chart are colored by whether the candy is chocolate-flavored.
  * The bars in the right chart are colored by whether the candy is fruity.

* In the `Data Source` tab, `Chocolate` and `Fruity` columns hold true or false values.

  ![Images/candy02.png](Images/candy02.png)

* Back to the charts. The bars to the left can be colored simply by dragging the `Chocolate` pill to the Color mark.

  ![Images/candy03.gif](Images/candy03.gif)

* Do the same for the bar chart on the right side. Tableau automatically colors the bars, and creates a legend.

  ![Images/candy04.png](Images/candy04.png)

* In the second visualization, a scatterplot is created that plots `Winpercent` against `Sugarpercent`.

  ![Images/candy05.png](Images/candy05.png)

* `Chocolate` is dragged to the Colors mark, `Competitorname` is dragged to the Detail mark, and `Pricepercent` is dragged to the Size mark.

  ![Images/candy06.gif](Images/candy06.gif)

  * This chart provides a handy view of trends.

  * For example, candies with a higher win percent tend to be chocolates (orange), and they tend to be pricier (larger circle size).

* The last visualization is virtually identical to the previous one, except that it compares fruity candies against non-fruity.

  ![Images/candy07.png](Images/candy07.png)

  * Overall, fruity candies appear to have a lower `Winpercent`, and tend to be less expensive.

</details>

<sub>[Having issues with this activity? Report a bug!](https://bit.ly/2yKVYqq)</sub>

## 6. Degrees That Pay

| Activity Time:       0:30 |  Elapsed Time:      3:10  |
|---------------------------|---------------------------|

<details>
  <summary><strong> 📣 6.1 Instructor Do: Storytelling (0:05)</strong></summary>

* Sometimes a single chart does not provide viewers with all of the information they might desire. In fact, visualizations are sometimes only truly helpful when placed alongside other charts/data.

  * Tableau makes the process of bringing multiple charts together in one place using stories.

* Open up [08-Ins_Storytelling](Activities/08-Ins_Storytelling/Solved/story_board.twbx) within Tableau and navigate into the `Shipping Overview` tab, pointing out how there are a bunch of text-boxes at the top of this view.

  ![Story Boxes](Images/11-Storytelling_StoryBoxes.png)

  * Click through a couple of the text boxes at the top of the view, discussing with the class how each text box is associated with a visualization from within the workbook.

* Create a new story within the workbook by selecting the `New Story` button from the bottom tabs of the application.

  ![Images/story01.png](Images/story01.png)

  * The view on the left side of the page will now contain all of the sheets within the current workbook and can be added into the story by dragging them into the main area.

  * Captions for the story point can be added/edited by clicking on the gray box at the top of the main view.

* To add a new page to a story, navigate to the `New Story Point` and select either `Blank` to create a blank page or `Duplicate` to create a page based upon an already existing page.

  ![Images/story02.png](Images/story02.png)

* Text boxes may also be added to the page by dragging the `Drag to Add Text` element onto the page so as to allow for more detailed explanations.

  ![Images/story03.png](Images/story03.png)

  ![Story Page](Images/11-Storytelling_StoryPage.png)

* Answer whatever questions the class may have regarding stories and then continue onto the next activity.

</details>

<details>
  <summary><strong> ✏️ 6.2 Students Do: Degrees That Pay (0:15) </strong></summary>

* The class will now build upon everything they have learned today in order to create a story in Tableau that visualizes what degrees/universities/regions pay out the best over time.

  ![Degree Salary Stats](Images/12-DegreesPay_StoryPoint.png)

* **Files**:

  * [degrees-that-pay-back.csv](Activities/09-Stu_DegreesPay_Story/Resources/degrees-that-pay-back.csv)

  * [salaries-by-college-type.csv](Activities/09-Stu_DegreesPay_Story/Resources/salaries-by-college-type.csv)

  * [salaries-by-region.csv](Activities/09-Stu_DegreesPay_Story/Resources/salaries-by-region.csv)

* **Instructions**:

  * Create a story using the datasets provided and formulate graphs that might be used to explore the following hypotheses:

  * "Ivy League schools offer best salaries while state offer worst"

  * "Going to school in California/NE offers higher salaries"

  * "Higher starting salaries generally mean higher salaries mid-career"

  * Bonus: Create a chart that visualizes starting median salaries, by major, against mid-career median, 75th percentile, and 90th percentile salaries.

</details>

<details>
  <summary><strong> ⭐ 6.3 Review: Degrees That Pay (0:10)</strong></summary>

* Open up [09-Stu_DegreesPay](Activities/09-Stu_DegreesPay_Story/Solved/degree_salaries.twbx) within Tableau and walk through the application with the class, answering whatever questions students may have.

* Again, emphasize to students that there is no single correct solution, that there are many ways to create these visualizations.

* The first visualization address the first prompt: do Ivy League school graduates earn higher salaries than their counterparts from state schools?

  ![Images/degrees01.png](Images/degrees01.png)

  * In this case, the average starting salaries, as well as mid-career salaries, were used.

* The chart can begin with `School Type` and `Measure Names` in Columns, and `Measure Values` in Rows.

  ![Images/degrees02.png](Images/degrees02.png)

  * `Measure Names` and `Measure Values` are automatically generated by Tableau to enable building charts like this: [Measure Names and Measure Values](https://onlinehelp.tableau.com/current/pro/desktop/en-us/datafields_understanddatawindow_meavalues.html)

* In the `Measure Values` pane, undesired pills can be removed, and aggregated as we wish: in this case, to averages.

  ![Images/degrees03.png](Images/degrees03.png)

  ![Images/degrees04.png](Images/degrees04.png)

* The bars colors can be differentiated by dragging `Measure Names` to the Color mark:

  ![Images/degrees02.png](Images/degrees05.gif)

  * The `salaries-by-college-type.csv (Count)` pill can be moved to the Detail mark to include this detail in the tooltip.

* The next visualization address whether grads of schools in the Northeast or California earn higher salaries than their counterparts in other regions. It is altogether similar to the previous one, substituting `Region` for `School Type`:

  ![Images/degrees06.png](Images/degrees06.png)

  ![Images/degrees07.png](Images/degrees07.png)

* In the next visualization, the question explored is whether higher starting salaries lead to higher salaries mid-career:

  ![Images/degrees08.png](Images/degrees08.png)

  * It plots the average starting median salary in Columns against average mid-career salary in Rows.

  * The `Undergraduate Major` pill is dragged to the Detail mark.

  * The `Percent change from Starting to Mid-Career Salary` pill is dragged to the Size mark.

* In the final visualization, the median starting salaries, on the left in green, are compared with mid-career salaries at 50th (median), 75th, and 90th percentiles.

  ![Images/degrees09.png](Images/degrees09.png)

* This chart can be created by starting with the `Undergraduate Major` in Rows, and `Measure Values` in Columns.

  ![Images/degrees10.png](Images/degrees10.png)

  * Again, `Measure Values` is automatically generated and allows multiple columns to exist in a single chart.

* `Measure Values` are modified to include the desired columns.

  ![Images/degrees11.png](Images/degrees11.png)

* Then `Measure Names` can be dragged to the Color mark, and `Percent change...` to the Detail mark.

  ![Images/degrees12.png](Images/degrees12.png)

* To change from a bar chart to circles, click on the drop-down menu in Marks, and choose `Circle`:

  ![Images/degrees13.gif](Images/degrees13.gif)

</details>

<sub>[Having issues with this activity? Report a bug!](https://bit.ly/2Xr2lcR)</sub>

- - -

## References

Tableau Software, LLC, A Salesforce Company. (2016). The Global Superstore Dataset. [http://www.tableau.com/sites/default/files/training/global_superstore.zip?_ga=2.196289452.1621662692.1614105956-1464408296.1614105934](http://www.tableau.com/sites/default/files/training/global_superstore.zip?_ga=2.196289452.1621662692.1614105956-1464408296.1614105934)

Joni Hoppen. (2017). Aquarela Advanced Analytics Medical Appointment No Shows. Version 5. [https://www.kaggle.com/joniarroba/noshowappointments](https://www.kaggle.com/joniarroba/noshowappointments)

SoFIFA.com. (2018). FIFA 18. Data initially compiled by SoFIFA.com. Compiled and Edited by Aman Shrivastava. [https://www.kaggle.com/thec03u5/fifa-18-demo-player-dataset](https://www.kaggle.com/thec03u5/fifa-18-demo-player-dataset)

ESPN Internet Ventures. (2014). The Ultimate Halloween Candy Power Ranking. [https://www.kaggle.com/fivethirtyeight/the-ultimate-halloween-candy-power-ranking/](https://www.kaggle.com/fivethirtyeight/the-ultimate-halloween-candy-power-ranking/)

"The Wall Street Journal. (2017). Salary Increase By Major.  Compiled from PayScale Inc.
 Survey. [http://online.wsj.com/public/resources/documents/info-Degrees_that_Pay_you_Back-sort.html](http://online.wsj.com/public/resources/documents/info-Degrees_that_Pay_you_Back-sort.html)."

"The Wall Street Journal. (2017). Salary Increase By Type of College. Compiled from PayScale Inc.
 Survey. [http://online.wsj.com/public/resources/documents/info-Salaries_for_Colleges_by_Type-sort.html](http://online.wsj.com/public/resources/documents/info-Salaries_for_Colleges_by_Type-sort.html)."


"The Wall Street Journal. (2017). Salary Increase By Region. Compiled from PayScale Inc.
 Survey. [http://online.wsj.com/public/resources/documents/info-Salaries_for_Colleges_by_Region-sort.html](http://online.wsj.com/public/resources/documents/info-Salaries_for_Colleges_by_Region-sort.html)."

- - -

### Copyright

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
