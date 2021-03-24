### 5. Students Do: Exploration Data (0:15)

* For this activity, students will be given a dataset containing the logs from Christopher Columbus' voyage to find the "New World". They will have to load the dataset into Tableau and then search through its records to find specific entries.

  ![Exploration Table](../Images/04-Exploration_Table.png)

* **File:**

  * [Columbus.csv](Activities/Extras/Resources/Columbus.csv)

* **Instructions:**

  * Load the dataset provided into Tableau and create filters to collect the following...

  * All of the logs that were written in November.

  * The greatest recorded number of leagues traveled.

  * The records containing the word "shore" within them.

  * All of the records from the 16th of January, 1493 to the 15th of March, 1493.

* **Hints:**

  * When going through this activity, experiment with some of the filtering/sorting methods Tableau offers.

### 6. Everyone Do: Exploration Data Review (0:05)

* Open up [02-Stu_Exploration](Activities/Extras/Solved/Columbus.twb) within Tableau and walk through the application with the class, answering whatever questions students may have.

  * As different filters are being discussed, create the filters within Tableau so that the class can see what the outcome looks like.

* Key points to cover when discussing the activity:

  * To filter the table down to only logs written in November, add a filter that looks at the "Month" column and select the "NOVEMBER" value from the list.

  * The greatest number of leagues traveled at one time can be found by creating a filter based on the "Leagues" column and finding the greatest value within that list.

  * Let the class know that they can also find the greatest distance traveled by changing the datatype of the "Leagues" column to "Number (Decimal)" and then sort the table based on those values.

  ![Changing DataTypes](../Images/04-Exploration_ChangeValues.png)

  * In order to collect all of the rows containing the word "shore" within the "Text" column, use a wildcard filter and look for any values containing the word "shore".

    ![Wildcard](../Images/04-Exploration_Wildcard.png)

  * Something very odd about Tableau is that there is a minimum date that Tableau will not check beyond. This date is "9/14/1752" and, as such, the built-in relative date filter will not work as intended... Unless the slider is used or multiple filters are set using "Day", "Year", and "Month" columns.

  * The obnoxious part about using the slider in this situation is that it does not let the user know what date they are currently looking at. As such, a lot of guess and check must be used if this method is employed.

  ![Date Weirdness](../Images/04-Exploration_DateWeirdness.png)

  * Reiterate how Tableau is rarely used for data manipulation. The application simply does not offer the user the fine control they may want and, as such, datasets are often tailored before being passed into Tableau.
