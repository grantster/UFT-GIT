Browser("BBC - Homepage").Page("BBC - Homepage").Link("News").Click
Browser("BBC - Homepage").Page("Home - BBC News").Link("Sport").Check CheckPoint("Sport")
Browser("BBC - Homepage").Page("Home - BBC News").Link("Sport").Click
Browser("BBC - Homepage").Page("Home - BBC Sport").Link("Football").Click
Browser("BBC - Homepage").Page("Football - BBC Sport").Link("Scores & Fixtures").Click
Browser("BBC - Homepage").Page("Scores & Fixtures - Football").Check CheckPoint("Scores & Fixtures - Football - BBC Sport")
Browser("BBC - Homepage").Page("Scores & Fixtures - Football").Link("Home").Click
