'use strict';

/* ═══════════════════════════════════════════════════════════
   175-QUESTION BANK  (Easy 50 · Medium 50 · Fun 75)
   Designed for elementary school (Grade 4+) — no Hard tier
   difficulty: 'easy' | 'medium' | 'fun'
═══════════════════════════════════════════════════════════ */
const ALL_QUESTIONS = [

  /* ── EASY (1–50) ──────────────────────────────────────── */
  { difficulty:'easy', q:'How many states does the USA have?', opts:['A) 48','B) 52','C) 50','D) 45'], ans:'C', fact:'Hawaii became the 50th state on August 21, 1959! 🌺' },
  { difficulty:'easy', q:'What do the 13 stripes on the American flag represent?', opts:['A) 13 presidents','B) 13 original colonies','C) 13 amendments','D) 13 territories'], ans:'B', fact:'The 13 original colonies declared independence from Britain in 1776! 🦅' },
  { difficulty:'easy', q:'"We the People" are the opening words of which document?', opts:['A) Declaration of Independence','B) Bill of Rights','C) U.S. Constitution','D) Emancipation Proclamation'], ans:'C', fact:'The U.S. Constitution was signed in Philadelphia on September 17, 1787! 📜' },
  { difficulty:'easy', q:'Who was President of the USA during the Civil War?', opts:['A) George Washington','B) Thomas Jefferson','C) Abraham Lincoln','D) Ulysses S. Grant'], ans:'C', fact:'Lincoln served as the 16th President from 1861 until his assassination in 1865! 🎩' },
  { difficulty:'easy', q:'Which is the largest US state by land area?', opts:['A) Texas','B) California','C) Alaska','D) Montana'], ans:'C', fact:'Alaska is more than twice the size of Texas — bought from Russia in 1867! 🧊' },
  { difficulty:'easy', q:'Which ocean borders the West Coast of the USA?', opts:['A) Atlantic Ocean','B) Indian Ocean','C) Pacific Ocean','D) Arctic Ocean'], ans:'C', fact:'The Pacific Ocean is the largest and deepest ocean on Earth! 🌊' },
  { difficulty:'easy', q:'What is the capital city of California?', opts:['A) Los Angeles','B) San Francisco','C) Sacramento','D) San Diego'], ans:'C', fact:'Sacramento became California\'s permanent state capital in 1854! 🌉' },
  { difficulty:'easy', q:'What does "DC" stand for in Washington, D.C.?', opts:['A) Democratic Capital','B) District of Columbia','C) Downtown Center','D) District of Congress'], ans:'B', fact:'Washington D.C. was established in 1790 and named after Christopher Columbus! 🏛️' },
  { difficulty:'easy', q:'Which leader is celebrated for helping to end slavery in the USA?', opts:['A) George Washington','B) Benjamin Franklin','C) Abraham Lincoln','D) Thomas Jefferson'], ans:'C', fact:'Lincoln signed the Emancipation Proclamation on January 1, 1863! ✊' },
  { difficulty:'easy', q:'Which landmark features the carved faces of 4 US Presidents?', opts:['A) Statue of Liberty','B) Mount Rushmore','C) Lincoln Memorial','D) Capitol Building'], ans:'B', fact:'Mount Rushmore features Washington, Jefferson, Theodore Roosevelt & Lincoln! ⛰️' },
  { difficulty:'easy', q:'What is the national bird of the USA?', opts:['A) Golden Eagle','B) Turkey','C) Red-tailed Hawk','D) Bald Eagle'], ans:'D', fact:'The Bald Eagle became the national bird in 1782 and appears on the Great Seal! 🦅' },
  { difficulty:'easy', q:'How many stars are on the US flag?', opts:['A) 48','B) 50','C) 52','D) 13'], ans:'B', fact:'Each star represents one of the 50 states. The 50th star was added in 1960 for Hawaii! ⭐' },
  { difficulty:'easy', q:'What is the US national anthem called?', opts:['A) The Star-Spangled Banner','B) America the Beautiful','C) God Bless America','D) My Country \'Tis of Thee'], ans:'A', fact:'Francis Scott Key wrote the lyrics during the Battle of Baltimore in 1814! 🎵' },
  { difficulty:'easy', q:'Which day celebrates US independence each year?', opts:['A) June 4th','B) July 14th','C) July 4th','D) August 4th'], ans:'C', fact:'The USA declared independence from Britain on July 4, 1776! 🎆' },
  { difficulty:'easy', q:'What is the capital of the USA?', opts:['A) New York City','B) Washington D.C.','C) Philadelphia','D) Boston'], ans:'B', fact:'Philadelphia was the first capital, but Washington D.C. became the capital in 1800! 🏛️' },
  { difficulty:'easy', q:'Who was the first President of the USA?', opts:['A) George Washington','B) John Adams','C) Thomas Jefferson','D) James Madison'], ans:'A', fact:'Washington served two terms (1789–1797) and set the two-term precedent! 🎖️' },
  { difficulty:'easy', q:'Which ocean borders the East Coast of the USA?', opts:['A) Atlantic Ocean','B) Pacific Ocean','C) Indian Ocean','D) Arctic Ocean'], ans:'A', fact:'The Atlantic Ocean separates North America from Europe and Africa! 🌊' },
  { difficulty:'easy', q:'How many stripes are on the US flag?', opts:['A) 50','B) 13','C) 12','D) 14'], ans:'B', fact:'7 red stripes and 6 white stripes — one for each of the original 13 colonies! 🇺🇸' },
  { difficulty:'easy', q:'Which president is on the US $1 bill?', opts:['A) George Washington','B) Abraham Lincoln','C) Thomas Jefferson','D) Benjamin Franklin'], ans:'A', fact:'George Washington has appeared on the $1 bill since 1869! 💵' },
  { difficulty:'easy', q:'What is the largest city in the USA by population?', opts:['A) New York City','B) Los Angeles','C) Chicago','D) Houston'], ans:'A', fact:'New York City has about 8.3 million residents — the most of any US city! 🗽' },
  { difficulty:'easy', q:'How many branches of government does the US have?', opts:['A) 1','B) 2','C) 3','D) 4'], ans:'C', fact:'Legislative (Congress), Executive (President), and Judicial (Supreme Court)! 🏛️' },
  { difficulty:'easy', q:'What famous statue stands in New York Harbor?', opts:['A) Lincoln Memorial','B) Statue of Liberty','C) Washington Monument','D) Jefferson Memorial'], ans:'B', fact:'France gifted the Statue of Liberty to the USA — it was completed in 1886! 🗽' },
  { difficulty:'easy', q:'What is the capital of Texas?', opts:['A) Dallas','B) Houston','C) Austin','D) San Antonio'], ans:'C', fact:'Austin was chosen as Texas\'s capital in 1839, named after Stephen F. Austin! 🤠' },
  { difficulty:'easy', q:'In what year did the USA declare independence?', opts:['A) 1766','B) 1776','C) 1786','D) 1796'], ans:'B', fact:'The Declaration of Independence was adopted on July 4, 1776! 🎉' },
  { difficulty:'easy', q:'What is the smallest US state by area?', opts:['A) Delaware','B) Connecticut','C) Vermont','D) Rhode Island'], ans:'D', fact:'Rhode Island is only 1,214 square miles — you could fit 425 Rhode Islands into Alaska! 🤏' },
  { difficulty:'easy', q:'What is the capital of Florida?', opts:['A) Miami','B) Orlando','C) Jacksonville','D) Tallahassee'], ans:'D', fact:'Tallahassee is located in northern Florida, far from the famous tourist spots! 🌴' },
  { difficulty:'easy', q:'Which state is nicknamed "the Sunshine State"?', opts:['A) California','B) Florida','C) Arizona','D) Hawaii'], ans:'B', fact:'Florida averages 237 sunny days per year — great for beaches and oranges! ☀️' },
  { difficulty:'easy', q:'Which state is nicknamed "the Lone Star State"?', opts:['A) California','B) Nevada','C) Texas','D) Oklahoma'], ans:'C', fact:'Texas\'s lone star represents its time as an independent republic (1836–1846)! ⭐' },
  { difficulty:'easy', q:'Which state is nicknamed "the Golden State"?', opts:['A) California','B) Nevada','C) Colorado','D) Arizona'], ans:'A', fact:'California earned its name from the 1849 Gold Rush when gold was found at Sutter\'s Mill! 🥇' },
  { difficulty:'easy', q:'How many US senators are there in total?', opts:['A) 50','B) 100','C) 150','D) 200'], ans:'B', fact:'Each of the 50 states sends 2 senators, giving 100 total in the US Senate! 🗳️' },
  { difficulty:'easy', q:'What is the voting age in the USA?', opts:['A) 16','B) 17','C) 18','D) 21'], ans:'C', fact:'The 26th Amendment (1971) lowered the voting age from 21 to 18! 🗳️' },
  { difficulty:'easy', q:'What is the capital of Hawaii?', opts:['A) Honolulu','B) Maui','C) Kailua','D) Hilo'], ans:'A', fact:'Honolulu is on the island of Oahu and was the seat of the Hawaiian Kingdom! 🌺' },
  { difficulty:'easy', q:'What is the capital of Illinois?', opts:['A) Chicago','B) Springfield','C) Rockford','D) Peoria'], ans:'B', fact:'Springfield is also home to Abraham Lincoln\'s presidential library! 🎩' },
  { difficulty:'easy', q:'Abraham Lincoln appears on which US coin?', opts:['A) Penny','B) Nickel','C) Dime','D) Quarter'], ans:'A', fact:'Lincoln has been on the penny since 1909, on the 100th anniversary of his birth! 🪙' },
  { difficulty:'easy', q:'What is the national motto of the USA?', opts:['A) Liberty and Justice','B) One Nation United','C) E Pluribus Unum','D) In God We Trust'], ans:'D', fact:'"In God We Trust" became the official motto in 1956 and appears on US currency! 💰' },
  { difficulty:'easy', q:'How many members are in the US House of Representatives?', opts:['A) 100','B) 200','C) 435','D) 535'], ans:'C', fact:'The 435 seats are apportioned by state population — California has the most (52)! 🏛️' },
  { difficulty:'easy', q:'Which country gave the Statue of Liberty to the USA?', opts:['A) England','B) France','C) Italy','D) Spain'], ans:'B', fact:'The French sculptor Frédéric Auguste Bartholdi designed the Statue of Liberty! 🇫🇷' },
  { difficulty:'easy', q:'What is the tallest mountain in the USA?', opts:['A) Mount Rainier','B) Mount Whitney','C) Mount Logan','D) Denali'], ans:'D', fact:'Denali in Alaska stands at 20,310 feet — the tallest in North America! 🏔️' },
  { difficulty:'easy', q:'What state borders only one other US state?', opts:['A) Hawaii','B) Maine','C) Alaska','D) Florida'], ans:'B', fact:'Maine borders only New Hampshire — plus Canada to the north! 🌲' },
  { difficulty:'easy', q:'What is the official name of the US president\'s home?', opts:['A) The Capitol','B) The White House','C) The Pentagon','D) Camp David'], ans:'B', fact:'The White House was first occupied by John Adams in 1800 and has 132 rooms! 🏠' },
  { difficulty:'easy', q:'What does FBI stand for?', opts:['A) Federal Bureau of Investigation','B) Federal Bureau of Intelligence','C) Federal Branch of Information','D) Federal Bureau of International Affairs'], ans:'A', fact:'The FBI was founded in 1908 and has over 35,000 employees! 🕵️' },
  { difficulty:'easy', q:'How many Great Lakes are there?', opts:['A) 3','B) 4','C) 5','D) 6'], ans:'C', fact:'Superior, Michigan, Huron, Erie, and Ontario — remember HOMES! 🌊' },
  { difficulty:'easy', q:'What is the capital of Ohio?', opts:['A) Cleveland','B) Columbus','C) Cincinnati','D) Toledo'], ans:'B', fact:'Columbus is named after explorer Christopher Columbus and is Ohio\'s largest city! 🌆' },
  { difficulty:'easy', q:'What state is nicknamed "Big Sky Country"?', opts:['A) Wyoming','B) Colorado','C) Idaho','D) Montana'], ans:'D', fact:'Montana has more cattle than people and endless open prairie skies! 🐄' },
  { difficulty:'easy', q:'What is the capital of New York state?', opts:['A) New York City','B) Buffalo','C) Albany','D) Rochester'], ans:'C', fact:'Albany has been New York\'s capital since 1797 — NYC is NOT the capital! 🏙️' },
  { difficulty:'easy', q:'What is the capital of Washington state?', opts:['A) Seattle','B) Spokane','C) Tacoma','D) Olympia'], ans:'D', fact:'Olympia is named after the Olympic Mountains visible from the city! 🏔️' },
  { difficulty:'easy', q:'What state has the most people?', opts:['A) California','B) Texas','C) Florida','D) New York'], ans:'A', fact:'California has about 39 million residents — more than many countries! 🌟' },
  { difficulty:'easy', q:'What is the capital of Georgia?', opts:['A) Savannah','B) Augusta','C) Atlanta','D) Macon'], ans:'C', fact:'Atlanta hosted the 1996 Summer Olympics and is home to CNN and Coca-Cola! 🥤' },
  { difficulty:'easy', q:'What is the capital of Michigan?', opts:['A) Detroit','B) Grand Rapids','C) Lansing','D) Flint'], ans:'C', fact:'Lansing became Michigan\'s capital in 1847 — Detroit was the first capital! 🚗' },
  { difficulty:'easy', q:'Which president is on the US $5 bill?', opts:['A) George Washington','B) Thomas Jefferson','C) Abraham Lincoln','D) Andrew Jackson'], ans:'C', fact:'Lincoln has been on the $5 bill since 1914, with the Lincoln Memorial on the back! 💵' },

  /* ── MEDIUM (51–100) ───────────────────────────────────── */
  { difficulty:'medium', q:'Which amendment to the US Constitution abolished slavery?', opts:['A) 1st Amendment','B) 13th Amendment','C) 15th Amendment','D) 16th Amendment'], ans:'B', fact:'The 13th Amendment was ratified on December 6, 1865, eight months after Lincoln\'s death! ✊' },
  { difficulty:'medium', q:'Who wrote the Declaration of Independence?', opts:['A) George Washington','B) Benjamin Franklin','C) Thomas Jefferson','D) John Adams'], ans:'C', fact:'Jefferson wrote the Declaration at age 33 in just 17 days in 1776! 🖊️' },
  { difficulty:'medium', q:'In what year did women gain the right to vote in the USA?', opts:['A) 1910','B) 1920','C) 1930','D) 1915'], ans:'B', fact:'The 19th Amendment was ratified on August 18, 1920 after 72 years of campaigning! 🗳️' },
  { difficulty:'medium', q:'Which was the first state to ratify the US Constitution?', opts:['A) Virginia','B) Pennsylvania','C) Massachusetts','D) Delaware'], ans:'D', fact:'Delaware ratified the Constitution on December 7, 1787 — earning the nickname "The First State"! 🏅' },
  { difficulty:'medium', q:'What is the Bill of Rights?', opts:['A) The Declaration of Independence','B) The Preamble to the Constitution','C) The first 10 amendments','D) The entire original Constitution'], ans:'C', fact:'James Madison drafted the Bill of Rights in 1789 to protect individual freedoms! 📜' },
  { difficulty:'medium', q:'How long is one term for a US President?', opts:['A) 2 years','B) 4 years','C) 6 years','D) 8 years'], ans:'B', fact:'Presidential terms of 4 years were set by the Constitution in 1787! 📅' },
  { difficulty:'medium', q:'How many terms can a US President serve?', opts:['A) 1 term','B) 2 terms','C) 3 terms','D) Unlimited'], ans:'B', fact:'The 22nd Amendment (1951) limited presidents to two terms after FDR served four! 📜' },
  { difficulty:'medium', q:'Which person is on the US $100 bill?', opts:['A) Benjamin Franklin','B) Alexander Hamilton','C) Andrew Jackson','D) Ulysses S. Grant'], ans:'A', fact:'Ben Franklin was never president, making the $100 bill unique among paper currency! 💵' },
  { difficulty:'medium', q:'Who was the 35th US President?', opts:['A) Dwight D. Eisenhower','B) John F. Kennedy','C) Lyndon B. Johnson','D) Richard Nixon'], ans:'B', fact:'JFK was assassinated on November 22, 1963, after just 1,000 days in office! 😢' },
  { difficulty:'medium', q:'What river forms the border between Texas and Mexico?', opts:['A) Rio Grande','B) Colorado River','C) Brazos River','D) Red River'], ans:'A', fact:'The Rio Grande (called Río Bravo in Mexico) stretches 1,896 miles! 🌵' },
  { difficulty:'medium', q:'What event caused the USA to enter World War II?', opts:['A) Attack on Pearl Harbor','B) Sinking of the Lusitania','C) D-Day invasion','D) Fall of France'], ans:'A', fact:'Japan attacked Pearl Harbor, Hawaii on December 7, 1941 — "a date which will live in infamy"! 🚢' },
  { difficulty:'medium', q:'What does the 1st Amendment protect?', opts:['A) Freedom of speech and religion','B) Right to bear arms','C) Right to a fair trial','D) Protection from unlawful searches'], ans:'A', fact:'The 1st Amendment also protects freedom of the press, petition, and assembly! 📰' },
  { difficulty:'medium', q:'Who was the first African-American president of the USA?', opts:['A) Colin Powell','B) Barack Obama','C) Thurgood Marshall','D) Jesse Jackson'], ans:'B', fact:'Barack Obama served two terms (2009–2017) and won the Nobel Peace Prize! 🏅' },
  { difficulty:'medium', q:'What is Yellowstone National Park famous for?', opts:['A) Giant redwood trees','B) Deepest lake in the USA','C) Geysers and hot springs','D) Largest canyon in the world'], ans:'C', fact:'Old Faithful geyser erupts roughly every 90 minutes and has done so for centuries! ⛲' },
  { difficulty:'medium', q:'In what year was the US Constitution written?', opts:['A) 1776','B) 1787','C) 1789','D) 1791'], ans:'B', fact:'The Constitution was debated for 4 months at the Philadelphia Convention in 1787! 📜' },
  { difficulty:'medium', q:'What carved the Grand Canyon in Arizona?', opts:['A) Colorado River','B) Missouri River','C) Rio Grande','D) Arkansas River'], ans:'A', fact:'The Colorado River took 5–6 million years to carve the Grand Canyon to 1-mile deep! 🏜️' },
  { difficulty:'medium', q:'What was the name of the first US Moon landing mission?', opts:['A) Mercury 3','B) Gemini 7','C) Apollo 11','D) Apollo 13'], ans:'C', fact:'Apollo 11 landed on the Moon on July 20, 1969 — watched by 600 million people on TV! 🚀' },
  { difficulty:'medium', q:'Who were the first two Americans to walk on the Moon?', opts:['A) Neil Armstrong and Buzz Aldrin','B) John Glenn and Alan Shepard','C) Michael Collins and Neil Armstrong','D) Buzz Aldrin and Michael Collins'], ans:'A', fact:'Neil Armstrong said "That\'s one small step for man, one giant leap for mankind"! 🌙' },
  { difficulty:'medium', q:'What is the deepest lake in the USA?', opts:['A) Lake Superior','B) Lake Tahoe','C) Flathead Lake','D) Crater Lake'], ans:'D', fact:'Crater Lake in Oregon is 1,949 feet deep, formed in a collapsed ancient volcano! 🌋' },
  { difficulty:'medium', q:'Which US city is known as the "Windy City"?', opts:['A) New York City','B) Chicago','C) Kansas City','D) Denver'], ans:'B', fact:'Chicago earned the nickname partly from politicians who were "full of hot air"! 💨' },
  { difficulty:'medium', q:'Which amendment gave African Americans the right to vote?', opts:['A) 13th Amendment','B) 15th Amendment','C) 19th Amendment','D) 24th Amendment'], ans:'B', fact:'The 15th Amendment (1870) prohibited denying the vote based on race! 🗳️' },
  { difficulty:'medium', q:'Which country sold the Louisiana Territory to the USA?', opts:['A) Spain','B) England','C) France','D) Portugal'], ans:'C', fact:'Napoleon sold 828,000 square miles to Jefferson in 1803 for just $15 million! 🗺️' },
  { difficulty:'medium', q:'How many justices sit on the US Supreme Court?', opts:['A) 7','B) 8','C) 9','D) 12'], ans:'C', fact:'The number 9 was established in 1869 — justices serve for life! ⚖️' },
  { difficulty:'medium', q:'What is the tallest building in the USA?', opts:['A) One World Trade Center','B) Empire State Building','C) Willis Tower','D) 432 Park Avenue'], ans:'A', fact:'One World Trade Center stands 1,776 feet tall — the height chosen to honor 1776! 🏙️' },
  { difficulty:'medium', q:'What does the 2nd Amendment guarantee?', opts:['A) Freedom of speech','B) Right to bear arms','C) Right to a fair trial','D) Protection from unreasonable searches'], ans:'B', fact:'The 2nd Amendment is one of the most debated in US history! 🔫' },
  { difficulty:'medium', q:'In what year did the Civil War end?', opts:['A) 1863','B) 1865','C) 1867','D) 1870'], ans:'B', fact:'General Robert E. Lee surrendered to Ulysses S. Grant at Appomattox on April 9, 1865! 🏳️' },
  { difficulty:'medium', q:'Which Civil Rights leader gave the "I Have a Dream" speech?', opts:['A) Martin Luther King Jr.','B) Malcolm X','C) John Lewis','D) Medgar Evers'], ans:'A', fact:'MLK delivered the speech to 250,000 people at the Lincoln Memorial on August 28, 1963! 🕊️' },
  { difficulty:'medium', q:'In what year did the Civil Rights Act pass?', opts:['A) 1954','B) 1960','C) 1964','D) 1968'], ans:'C', fact:'President LBJ signed the Civil Rights Act of 1964, outlawing discrimination based on race! ✊' },
  { difficulty:'medium', q:'What is the name of the US president\'s official airplane?', opts:['A) Eagle One','B) President\'s Wing','C) Air Force One','D) Sky Force One'], ans:'C', fact:'"Air Force One" is the callsign used whenever a US President is aboard any Air Force aircraft! ✈️' },
  { difficulty:'medium', q:'Which battle is considered the turning point of the Civil War?', opts:['A) Battle of Bull Run','B) Battle of Gettysburg','C) Battle of Antietam','D) Battle of Fort Sumter'], ans:'B', fact:'The 3-day Battle of Gettysburg (July 1–3, 1863) left 50,000 casualties! ⚔️' },
  { difficulty:'medium', q:'What country sold Alaska to the USA?', opts:['A) Canada','B) Japan','C) Norway','D) Russia'], ans:'D', fact:'Russia sold Alaska to the US in 1867 for $7.2 million — about 2 cents per acre! 🧊' },
  { difficulty:'medium', q:'What does "E Pluribus Unum" mean on the US seal?', opts:['A) In God We Trust','B) Out of Many, One','C) Land of the Free','D) Freedom Forever'], ans:'B', fact:'"E Pluribus Unum" is Latin, referring to 13 colonies uniting into one nation! 🦅' },
  { difficulty:'medium', q:'How many justices are on the US Supreme Court?', opts:['A) 7','B) 8','C) 9','D) 11'], ans:'C', fact:'Nine justices have served on the Court since 1869 — they are appointed for life! ⚖️' },
  { difficulty:'medium', q:'What is the US government building that houses the Department of Defense?', opts:['A) The Capitol','B) White House','C) Pentagon','D) Fort Knox'], ans:'C', fact:'The Pentagon has 17.5 miles of corridors but you can walk between any two points in 7 minutes! 🏢' },
  { difficulty:'medium', q:'Who was president during the Louisiana Purchase?', opts:['A) George Washington','B) Thomas Jefferson','C) John Adams','D) James Madison'], ans:'B', fact:'Jefferson doubled the size of the USA with the Louisiana Purchase in 1803! 🗺️' },
  { difficulty:'medium', q:'What is the name of the US stock exchange on Wall Street?', opts:['A) NASDAQ','B) New York Stock Exchange','C) American Stock Exchange','D) US Securities Exchange'], ans:'B', fact:'The NYSE was founded in 1792 under a buttonwood tree on Wall Street! 📈' },
  { difficulty:'medium', q:'What year was the Statue of Liberty completed?', opts:['A) 1876','B) 1881','C) 1886','D) 1892'], ans:'C', fact:'The Statue of Liberty was completed in France in 1884 and assembled in New York by 1886! 🗽' },
  { difficulty:'medium', q:'Which president\'s face is NOT on Mount Rushmore?', opts:['A) George Washington','B) Abraham Lincoln','C) John F. Kennedy','D) Theodore Roosevelt'], ans:'C', fact:'JFK died in 1963, long after Mount Rushmore was completed in 1941! ⛰️' },
  { difficulty:'medium', q:'What year did the US land on the Moon?', opts:['A) 1967','B) 1969','C) 1971','D) 1965'], ans:'B', fact:'Apollo 11 landed on the Sea of Tranquility on July 20, 1969! 🌕' },
  { difficulty:'medium', q:'What is the nickname of New York City?', opts:['A) The City of Angels','B) The Big Apple','C) The Windy City','D) The Golden City'], ans:'B', fact:'"Big Apple" was popularized in the 1920s by a sportswriter referring to NYC\'s racetracks! 🍎' },
  { difficulty:'medium', q:'What famous speech did Lincoln deliver at Gettysburg in 1863?', opts:['A) The Union Address','B) The Freedom Speech','C) The Gettysburg Address','D) The Emancipation Speech'], ans:'C', fact:'The Gettysburg Address was only 271 words long! 🎤' },
  { difficulty:'medium', q:'What does NASA stand for?', opts:['A) National Air and Space Agency','B) National Aviation Science Administration','C) National Aeronautics and Space Administration','D) North American Space Agency'], ans:'C', fact:'NASA was founded in 1958 and has sent humans to the Moon and robots to Mars! 🚀' },
  { difficulty:'medium', q:'Which US city is known as "Music City"?', opts:['A) Memphis','B) New Orleans','C) Chicago','D) Nashville'], ans:'D', fact:'Nashville is the home of country music and Grand Ole Opry, the world\'s longest-running radio show! 🎸' },
  { difficulty:'medium', q:'What is the US national flower?', opts:['A) Sunflower','B) Rose','C) Magnolia','D) Daisy'], ans:'B', fact:'The Rose became the US national floral emblem in 1986, signed by Ronald Reagan! 🌹' },
  { difficulty:'medium', q:'What famous road stretches from Chicago to Los Angeles?', opts:['A) Interstate 80','B) Highway 1','C) Route 66','D) The Lincoln Highway'], ans:'C', fact:'Route 66, the "Mother Road," stretches 2,448 miles and was famous during the Dust Bowl era! 🚗' },
  { difficulty:'medium', q:'What is the longest hiking trail in the USA?', opts:['A) Appalachian Trail','B) Pacific Crest Trail','C) Continental Divide Trail','D) Oregon Trail'], ans:'C', fact:'The CDT is ~3,100 miles long, running through Montana, Idaho, Wyoming, Colorado, and New Mexico! 🥾' },
  { difficulty:'medium', q:'Which US city is known as "The City of Angels"?', opts:['A) San Francisco','B) Chicago','C) Las Vegas','D) Los Angeles'], ans:'D', fact:'Los Angeles comes from the full Spanish name meaning "City of the Angels"! 😇' },
  { difficulty:'medium', q:'What is the name of the US national park famous for the world\'s largest trees?', opts:['A) Yosemite','B) Olympic','C) Sequoia','D) Redwood'], ans:'C', fact:'The General Sherman Tree in Sequoia NP is the world\'s largest tree by volume — 2.7 million pounds! 🌲' },
  { difficulty:'medium', q:'Which US city hosted the 1996 Summer Olympics?', opts:['A) Los Angeles','B) Chicago','C) Atlanta','D) New York'], ans:'C', fact:'Atlanta\'s 1996 Olympics were the 100th anniversary of the modern Games! 🏅' },
  { difficulty:'medium', q:'What is the name of the famous canyon in Utah known for red hoodoo rock formations?', opts:['A) Grand Canyon','B) Zion Canyon','C) Bryce Canyon','D) Antelope Canyon'], ans:'C', fact:'Bryce Canyon\'s red, orange, and white hoodoos were carved by frost and water erosion! 🏜️' },

  /* ── FUN (101–175) ─────────────────────────────────────── */
  { difficulty:'fun', q:'What famous theme park in Florida has more visitors than any other in the world?', opts:['A) Universal Studios Florida','B) Magic Kingdom at Walt Disney World','C) SeaWorld Orlando','D) LEGOLAND Florida'], ans:'B', fact:'Magic Kingdom sees over 20 million visitors per year — more than the population of New York State! 🏰' },
  { difficulty:'fun', q:'What sport is played in the Super Bowl?', opts:['A) Basketball','B) Baseball','C) American Football','D) Soccer'], ans:'C', fact:'Super Bowl ads cost over $7 million for just 30 seconds — the most expensive TV ads ever! 🏈' },
  { difficulty:'fun', q:'What is the most watched sporting event in the USA each year?', opts:['A) World Series','B) Super Bowl','C) NBA Finals','D) Daytona 500'], ans:'B', fact:'About 115 million Americans watch the Super Bowl — nearly 1 in 3 people! 📺' },
  { difficulty:'fun', q:'What famous US parade on Thanksgiving is watched by millions on TV?', opts:['A) Times Square Parade','B) Macy\'s Thanksgiving Day Parade','C) Broadway Spectacular','D) Manhattan Harvest Parade'], ans:'B', fact:'The Macy\'s parade started in 1924 and features giant helium balloons as tall as a 4-story building! 🦃' },
  { difficulty:'fun', q:'What holiday do American children dress up in costumes to trick-or-treat?', opts:['A) Thanksgiving','B) Easter','C) Christmas','D) Halloween'], ans:'D', fact:'Americans spend over $3.6 billion on Halloween costumes each year — the #1 costume is often a witch! 🧙' },
  { difficulty:'fun', q:'What is the most popular pizza topping in the USA?', opts:['A) Mushrooms','B) Sausage','C) Pepperoni','D) Extra Cheese'], ans:'C', fact:'Americans eat approximately 3 billion pizzas per year — that\'s 23 pounds per person! 🍕' },
  { difficulty:'fun', q:'What famous US science fiction franchise is set "A long time ago in a galaxy far, far away"?', opts:['A) Star Trek','B) Star Wars','C) Guardians of the Galaxy','D) Dune'], ans:'B', fact:'Star Wars was created by George Lucas and first released in 1977 — it\'s made over $10 billion at the box office! ⭐' },
  { difficulty:'fun', q:'What board game features buying properties like Boardwalk and Park Place?', opts:['A) Risk','B) Clue','C) Monopoly','D) Scrabble'], ans:'C', fact:'Monopoly was invented in 1935; it\'s been played by over 1 billion people in 114 countries! 🎲' },
  { difficulty:'fun', q:'What does NFL stand for?', opts:['A) National Federal League','B) National Football League','C) National Field League','D) North Football League'], ans:'B', fact:'The NFL was founded in 1920 and now has 32 teams with a combined value of over $120 billion! 🏈' },
  { difficulty:'fun', q:'What is the name of the iconic American cereal tiger who says "They\'re Gr-r-reat!"?', opts:['A) Tony the Tiger','B) Toucan Sam','C) Cap\'n Crunch','D) Count Chocula'], ans:'A', fact:'Tony the Tiger has been the Frosted Flakes mascot since 1952! 🐯' },
  { difficulty:'fun', q:'What famous road stretches from Chicago to Los Angeles (Route ___)?', opts:['A) Route 1','B) Route 50','C) Route 66','D) Route 101'], ans:'C', fact:'Route 66 opened in 1926 and was called the "Main Street of America" — now mostly replaced by I-40! 🚗' },
  { difficulty:'fun', q:'What is the most popular fast food item ordered in the USA?', opts:['A) Hot dog','B) Burrito','C) Hamburger','D) Fried chicken sandwich'], ans:'C', fact:'Americans eat about 50 billion hamburgers per year — around 3 burgers per person every day! 🍔' },
  { difficulty:'fun', q:'What year was the first iPhone released?', opts:['A) 2005','B) 2007','C) 2009','D) 2010'], ans:'B', fact:'Steve Jobs unveiled the first iPhone on January 9, 2007, calling it "an iPod, a phone, and an internet device"! 📱' },
  { difficulty:'fun', q:'What popular American music genre was born in New Orleans?', opts:['A) Country','B) Jazz','C) Rock and Roll','D) Hip-Hop'], ans:'B', fact:'Jazz emerged in New Orleans around 1900, blending African rhythms, blues, and European harmonies! 🎷' },
  { difficulty:'fun', q:'What is America\'s most famous music award show?', opts:['A) Grammy Awards','B) Oscar Awards','C) Tony Awards','D) Emmy Awards'], ans:'A', fact:'The Grammy Awards have been held since 1959 — the award is named after the gramophone! 🏆' },
  { difficulty:'fun', q:'How tall is the Statue of Liberty from base to torch?', opts:['A) 150 feet','B) 200 feet','C) 305 feet','D) 500 feet'], ans:'C', fact:'The Statue of Liberty stands 305 feet tall — Lady Liberty\'s index finger alone is 8 feet long! 🗽' },
  { difficulty:'fun', q:'What is the best-selling American novel about a great white whale?', opts:['A) The Old Man and the Sea','B) Moby-Dick','C) Billy Budd','D) The Call of the Wild'], ans:'B', fact:'Herman Melville\'s Moby-Dick (1851) flopped when published — it wasn\'t recognized as a classic until the 1920s! 🐋' },
  { difficulty:'fun', q:'What is the name of the New Year\'s Eve countdown celebration in Times Square?', opts:['A) Midnight Countdown','B) New Year\'s Blast','C) The Ball Drop','D) Times Square Countdown'], ans:'C', fact:'The Times Square Ball has been dropping every December 31 since 1907 — it\'s covered in 2,688 crystals! 🎊' },
  { difficulty:'fun', q:'What year did the first Disneyland open?', opts:['A) 1950','B) 1955','C) 1960','D) 1965'], ans:'B', fact:'Disneyland opened in Anaheim, California on July 17, 1955 — Walt Disney himself opened it! 🏰' },
  { difficulty:'fun', q:'What US state experiences the most earthquakes?', opts:['A) California','B) Washington','C) Hawaii','D) Alaska'], ans:'D', fact:'Alaska has more earthquakes than the other 49 states combined — about 1,000 per month! 🌍' },
  { difficulty:'fun', q:'Which fictional superhero wears a red, white, and blue suit?', opts:['A) Superman','B) Captain America','C) Uncle Sam','D) The Patriot'], ans:'B', fact:'Captain America first appeared in Marvel Comics in 1941, punching Hitler on the cover! 🛡️' },
  { difficulty:'fun', q:'What is the most common language spoken in the USA after English?', opts:['A) Spanish','B) French','C) Chinese','D) German'], ans:'A', fact:'About 42 million Americans speak Spanish at home — the US has the 2nd largest Spanish-speaking population in the world! 🗣️' },
  { difficulty:'fun', q:'What US state produces the most cheese?', opts:['A) Vermont','B) New York','C) Wisconsin','D) California'], ans:'C', fact:'Wisconsin produces over 3 billion pounds of cheese per year — that\'s 25% of all US cheese! 🧀' },
  { difficulty:'fun', q:'What iconic American movie features a time-traveling DeLorean car?', opts:['A) Knight Rider','B) Time Machine','C) Back to the Future','D) Ghostbusters'], ans:'C', fact:'In Back to the Future (1985), the DeLorean needs to hit 88 mph to time travel! 🚗' },
  { difficulty:'fun', q:'What US city is known as having the most theme parks?', opts:['A) Anaheim, California','B) Las Vegas, Nevada','C) Orlando, Florida','D) Dallas, Texas'], ans:'C', fact:'Orlando has Walt Disney World, Universal Studios, SeaWorld, and dozens more — the "Theme Park Capital of the World"! 🎢' },
  { difficulty:'fun', q:'What is the famous US balloon festival held each October in New Mexico?', opts:['A) Napa Valley Balloon Fiesta','B) Texas Sky Festival','C) Albuquerque International Balloon Fiesta','D) Las Vegas Sky Spectacular'], ans:'C', fact:'Over 500 hot air balloons fill the Albuquerque sky each year — the world\'s largest balloon event! 🎈' },
  { difficulty:'fun', q:'What famous American author wrote "The Adventures of Tom Sawyer"?', opts:['A) Ernest Hemingway','B) Mark Twain','C) F. Scott Fitzgerald','D) John Steinbeck'], ans:'B', fact:'Mark Twain (real name Samuel Clemens) grew up on the Mississippi River — his stories captured frontier America! ✍️' },
  { difficulty:'fun', q:'What US TV show features a yellow cartoon family in a town called Springfield?', opts:['A) Family Guy','B) American Dad','C) The Simpsons','D) Futurama'], ans:'C', fact:'The Simpsons premiered in 1989 and is the longest-running American animated TV series ever! 📺' },
  { difficulty:'fun', q:'What famous American game show features answers presented as questions?', opts:['A) Wheel of Fortune','B) Jeopardy!','C) Who Wants to Be a Millionaire','D) Deal or No Deal'], ans:'B', fact:'Jeopardy! has been on TV since 1964 and has been teaching and challenging viewers for over 60 years! 📺' },
  { difficulty:'fun', q:'What famous inventor created the lightbulb and held 1,093 patents?', opts:['A) Benjamin Franklin','B) Nikola Tesla','C) Thomas Edison','D) Alexander Graham Bell'], ans:'C', fact:'Edison said "Genius is 1% inspiration and 99% perspiration" — he also invented the phonograph! 💡' },
  { difficulty:'fun', q:'What is the nickname of the famous Las Vegas hotel and casino strip?', opts:['A) The Neon Mile','B) The Boulevard','C) The Strip','D) Sin Row'], ans:'C', fact:'"The Strip" is 4.2 miles of casinos and hotels — Las Vegas uses more neon signs than any other city! 🎰' },
  { difficulty:'fun', q:'What US state is the largest producer of potatoes?', opts:['A) Maine','B) Washington','C) Idaho','D) North Dakota'], ans:'C', fact:'Idaho produces about 30% of all US potatoes — hence "Idaho potatoes" are famous worldwide! 🥔' },
  { difficulty:'fun', q:'What famous US marathon held every April is the world\'s oldest annual marathon?', opts:['A) New York City Marathon','B) Boston Marathon','C) Chicago Marathon','D) LA Marathon'], ans:'B', fact:'The Boston Marathon began in 1897 and covers 26.2 miles — one of the world\'s most prestigious races! 🏃' },
  { difficulty:'fun', q:'What US company created Mickey Mouse?', opts:['A) Warner Bros','B) Disney','C) Universal','D) Pixar'], ans:'B', fact:'Walt Disney created Mickey Mouse in 1928 — Mickey was almost named "Mortimer Mouse"! 🐭' },
  { difficulty:'fun', q:'Which US state is famous for Mardi Gras celebrations?', opts:['A) Florida','B) Mississippi','C) Louisiana','D) Alabama'], ans:'C', fact:'New Orleans\' Mardi Gras draws 1.4 million visitors and is one of the world\'s largest street parties! 🎭' },
  /* ── NEW FUN (kid-friendly additions) ─────────────────── */
  { difficulty:'fun', q:'What color are school buses in the USA?', opts:['A) Orange','B) Yellow','C) White','D) Red'], ans:'B', fact:'The exact shade is called "National School Bus Glossy Yellow" — standardized in 1939 so kids are visible to drivers! 🚌' },
  { difficulty:'fun', q:'Which US state is home to Hollywood and the movie industry?', opts:['A) New York','B) Texas','C) California','D) Nevada'], ans:'C', fact:'Hollywood became the movie capital in the 1910s because of sunny weather perfect for filming outdoors! 🎬' },
  { difficulty:'fun', q:'What is the most popular ice cream flavor in the USA?', opts:['A) Chocolate','B) Strawberry','C) Cookies & Cream','D) Vanilla'], ans:'D', fact:'Vanilla is #1! Americans eat about 1.5 billion gallons of ice cream every year — that\'s a mountain of scoops! 🍦' },
  { difficulty:'fun', q:'What do American children say when trick-or-treating on Halloween?', opts:['A) "Boo!"','B) "Trick or Treat!"','C) "Happy Halloween!"','D) "Give me sweets!"'], ans:'B', fact:'"Trick or treat" means: give us a treat or we\'ll play a trick on you! About 70 million kids trick-or-treat each year! 🎃' },
  { difficulty:'fun', q:'In a classic American sandwich called "PB&J", what does "PB" stand for?', opts:['A) Peach Butter','B) Peanut Butter','C) Potato and Bread','D) Pear and Banana'], ans:'B', fact:'The average American child eats about 1,500 PB&J sandwiches before finishing high school! 🥜' },
  { difficulty:'fun', q:'How many sides does a US stop sign have?', opts:['A) 4 sides','B) 6 sides','C) 8 sides','D) 12 sides'], ans:'C', fact:'Stop signs are octagons (8-sided) so drivers can recognize the shape even in heavy snow! 🛑' },
  { difficulty:'fun', q:'What color is the famous Golden Gate Bridge in San Francisco?', opts:['A) Gold','B) Silver-grey','C) Red-orange','D) Blue'], ans:'C', fact:'The color is called "International Orange" — chosen to be visible in San Francisco\'s famous thick fog! 🌉' },
  { difficulty:'fun', q:'Which superhero protects Gotham City wearing a bat costume?', opts:['A) Superman','B) Spider-Man','C) Batman','D) Iron Man'], ans:'C', fact:'Batman (created 1939) has no super powers — he fights crime with intelligence, gadgets, and martial arts! 🦇' },
  { difficulty:'fun', q:'What is the name of the famous big RED cartoon dog in children\'s books?', opts:['A) Pluto','B) Scooby-Doo','C) Lassie','D) Clifford'], ans:'D', fact:'Clifford the Big Red Dog is as tall as a two-story house! He was created by Norman Bridwell in 1963! 🐕' },
  { difficulty:'fun', q:'What is the name of the little orange clownfish in the Pixar movie "Finding ___"?', opts:['A) Dory','B) Nemo','C) Flipper','D) Gil'], ans:'B', fact:'Finding Nemo (2003) was so popular that clownfish sales jumped 40% after the movie was released! 🐠' },
  { difficulty:'fun', q:'What flat, round American breakfast food is stacked and topped with maple syrup?', opts:['A) Waffles','B) French toast','C) Pancakes','D) Crepes'], ans:'C', fact:'Americans eat about 3 billion pounds of pancake mix each year — the world record stack is over 1 meter tall! 🥞' },
  { difficulty:'fun', q:'What cereal has a leprechaun mascot and colorful marshmallow pieces?', opts:['A) Froot Loops','B) Lucky Charms','C) Trix','D) Cocoa Puffs'], ans:'B', fact:'Lucky Charms (1964) marshmallow pieces are called "marbits" — there are currently 8 different shapes! 🍀' },
  { difficulty:'fun', q:'What yellow cartoon character lives in a pineapple under the sea?', opts:['A) Patrick Star','B) Sandy Cheeks','C) SpongeBob SquarePants','D) Gary the Snail'], ans:'C', fact:'SpongeBob\'s creator was a marine biology teacher — he based the character on a real sea sponge! 🧽' },
  { difficulty:'fun', q:'How many points does each star on the US flag have?', opts:['A) 4 points','B) 5 points','C) 6 points','D) 8 points'], ans:'B', fact:'Each of the 50 stars has exactly 5 points — one for each state of the USA! ⭐' },
  { difficulty:'fun', q:'What famous fashion doll with blonde hair has been an icon since 1959?', opts:['A) American Girl','B) Barbie','C) Bratz','D) Polly Pocket'], ans:'B', fact:'Barbie was invented by Ruth Handler and named after her daughter Barbara — over 1 billion have been sold! 💅' },
  { difficulty:'fun', q:'What is the most popular Thanksgiving dessert in the USA?', opts:['A) Apple pie','B) Pumpkin pie','C) Pecan pie','D) Blueberry pie'], ans:'B', fact:'About 50 million pumpkin pies are eaten at Thanksgiving — nearly one for every 6 Americans! 🥧' },
  { difficulty:'fun', q:'What famous US children\'s TV show with a "Big Bird" has been teaching kids since 1969?', opts:['A) Blue\'s Clues','B) Barney & Friends','C) Sesame Street','D) Mister Rogers\' Neighborhood'], ans:'C', fact:'Sesame Street has won more Emmy Awards than any other show in history — over 200! 🐦' },
  { difficulty:'fun', q:'What do Americans call the sport that most of the world calls "football"?', opts:['A) Rugby','B) Soccer','C) Kickball','D) Gridiron'], ans:'B', fact:'The USA calls it "soccer" while the rest of the world says "football" — the term comes from "association football"! ⚽' },
  { difficulty:'fun', q:'What famous red-and-white striped candy is shaped like a cane and popular at Christmas?', opts:['A) Lollipop','B) Rock candy','C) Candy cane','D) Peppermint twist'], ans:'C', fact:'Americans consume about 1.76 billion candy canes every year — mostly in November and December! 🍬' },
  { difficulty:'fun', q:'What flying toy disc was accidentally invented when someone tossed a pie tin?', opts:['A) Boomerang','B) Flying saucer','C) Frisbee','D) Discus'], ans:'C', fact:'In 1948, Walter Morrison invented the plastic Frisbee after watching students toss Frisbie Pie Company tins! 🥏' },
  { difficulty:'fun', q:'What is the name of the green T-Rex dinosaur toy in the Pixar movie "Toy Story"?', opts:['A) Rex','B) Buzz','C) Hamm','D) Slinky'], ans:'A', fact:'Rex is afraid of being replaced by a newer dinosaur toy and is too friendly to be scary! 🦕' },
  { difficulty:'fun', q:'What sweet treat is made by dropping a scoop of vanilla ice cream into a glass of root beer?', opts:['A) Ice cream float','B) Root beer float','C) Soda float','D) Cream soda'], ans:'B', fact:'The root beer float was supposedly invented in 1874 by Frank Wisner in Colorado — also called a "black cow"! 🍨' },
  { difficulty:'fun', q:'What famous bear mascot warns Americans by saying "Only YOU can prevent forest fires!"?', opts:['A) Care Bear','B) Paddington Bear','C) Smokey Bear','D) Winnie-the-Pooh'], ans:'C', fact:'Smokey Bear has been the US Forest Service mascot since 1944 — based on a real bear cub rescued from a wildfire! 🐻' },
  { difficulty:'fun', q:'What famous orange cartoon cat hates Mondays and loves eating lasagna?', opts:['A) Tom (Tom & Jerry)','B) Garfield','C) Felix the Cat','D) Top Cat'], ans:'B', fact:'Garfield was created by Jim Davis in 1978 and is the most widely syndicated comic strip in history! 😸' },
  { difficulty:'fun', q:'What is the name of the cowboy hero in the Pixar movie "Toy Story"?', opts:['A) Buzz Lightyear','B) Woody','C) Sheriff Callie','D) Rex'], ans:'B', fact:'Woody is a pull-string cowboy doll — his full name is Woody Pride! Andy wrote his name on Woody\'s boot! 🤠' },
];

/* ═══════════════════════════════════════════════════════════
   GAME STATE
═══════════════════════════════════════════════════════════ */
const state = {
  playerName:   '',
  difficulty:   'all',
  currentQ:     0,
  score:        0,
  quiz:         [],
  startMs:      0,
  endMs:        0,
  timerHandle:  null,
  answered:     false,
  lastEntryId:  null,
  adminClicks:  0,
  adminTimer:   null,
};

/* ═══════════════════════════════════════════════════════════
   AUDIO ENGINE (Web Audio API — no external files needed)
═══════════════════════════════════════════════════════════ */
let _ctx = null;
function getCtx() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
  return _ctx;
}
function tone(freq, dur, type = 'sine', vol = 0.28) {
  try {
    const c = getCtx();
    const osc  = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, c.currentTime);
    gain.gain.setValueAtTime(vol, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
    osc.start(c.currentTime);
    osc.stop(c.currentTime + dur);
  } catch (_) {}
}
function sndCorrect() {
  [523, 659, 784].forEach((f, i) => setTimeout(() => tone(f, 0.22), i * 90));
}
function sndWrong() {
  tone(220, 0.12, 'sawtooth', 0.22);
  setTimeout(() => tone(175, 0.22, 'sawtooth', 0.18), 100);
}
function sndFanfare() {
  const notes = [523, 659, 784, 1047, 784, 1047, 1319];
  const times = [0, 110, 220, 340, 490, 590, 720];
  notes.forEach((f, i) => setTimeout(() => tone(f, 0.28, 'sine', 0.32), times[i]));
}

/* ═══════════════════════════════════════════════════════════
   SCREEN MANAGEMENT
═══════════════════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ═══════════════════════════════════════════════════════════
   LEADERBOARD — localStorage
═══════════════════════════════════════════════════════════ */
const LB_KEY = 'sjii_usa_quiz_v4';

function getLB() {
  try { return JSON.parse(localStorage.getItem(LB_KEY)) || []; }
  catch { return []; }
}

function saveLB(name, score, timeMs, difficulty) {
  const lb = getLB();
  const id = `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  lb.push({ id, name, score, timeMs, difficulty, date: new Date().toLocaleDateString() });
  lb.sort((a, b) => b.score - a.score || a.timeMs - b.timeMs);
  const top10 = lb.slice(0, 10);
  localStorage.setItem(LB_KEY, JSON.stringify(top10));
  return { id, rank: top10.findIndex(e => e.id === id) };
}

function renderLB(currentId, containerId = 'lbContent') {
  const lb  = getLB();
  const el  = document.getElementById(containerId);
  if (!el) return;
  if (!lb.length) {
    el.innerHTML = '<div class="lb-empty">No scores yet — be the first to play! 🇺🇸</div>';
    return;
  }
  const medals   = ['🥇', '🥈', '🥉'];
  const diffLabel = { all:'All', easy:'Easy', medium:'Med', fun:'Fun' };
  let h = '<table class="lb-table"><thead><tr><th>Rank</th><th>Name</th><th>Score</th><th>Time</th><th>Level</th></tr></thead><tbody>';
  lb.forEach((e, i) => {
    const isYou  = e.id === currentId;
    const rcls   = i === 0 ? 'gold-r' : i === 1 ? 'silver-r' : i === 2 ? 'bronze-r' : '';
    const rIcon  = i < 3 ? medals[i] : `#${i + 1}`;
    const timeSec = (e.timeMs / 1000).toFixed(1) + 's';
    h += `<tr class="${isYou ? 'lb-you' : ''}">`;
    h += `<td class="lb-rank ${rcls}">${rIcon}</td>`;
    h += `<td class="lb-name">${esc(e.name)}${isYou ? '<span class="lb-you-badge">YOU</span>' : ''}</td>`;
    h += `<td class="lb-score">${e.score}/10</td>`;
    h += `<td class="lb-time">${timeSec}</td>`;
    h += `<td class="lb-diff">${diffLabel[e.difficulty] || '—'}</td>`;
    h += '</tr>';
  });
  h += '</tbody></table>';
  el.innerHTML = h;
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function showLeaderboard(fromHome) {
  renderLB(fromHome ? null : state.lastEntryId);
  showScreen('screen-leaderboard');
}

/* ═══════════════════════════════════════════════════════════
   DIFFICULTY SELECTOR & INIT
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.difficulty = btn.dataset.diff;
    });
  });

  // Secret admin: click the 🇺🇸 flag 7× within 5 seconds
  const flagEl = document.getElementById('flagIcon');
  if (flagEl) {
    flagEl.addEventListener('click', () => {
      state.adminClicks++;
      clearTimeout(state.adminTimer);
      if (state.adminClicks >= 7) {
        state.adminClicks = 0;
        openAdmin();
        return;
      }
      state.adminTimer = setTimeout(() => { state.adminClicks = 0; }, 5000);
    });
  }

  // Check URL for ?admin
  if (window.location.search.includes('admin')) openAdmin();

  // Enter key on name field
  document.getElementById('playerName').addEventListener('keydown', e => {
    if (e.key === 'Enter') startGame();
  });
});

/* ═══════════════════════════════════════════════════════════
   QUESTION SELECTION — Fisher-Yates shuffle, pick 10
═══════════════════════════════════════════════════════════ */
function pickQuestions(diff) {
  const pool = diff === 'all'
    ? ALL_QUESTIONS
    : ALL_QUESTIONS.filter(q => q.difficulty === diff);
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, 10);
}

/* ═══════════════════════════════════════════════════════════
   GAME FLOW
═══════════════════════════════════════════════════════════ */
function startGame() {
  const inp  = document.getElementById('playerName');
  const name = inp.value.trim();
  if (!name) {
    inp.classList.add('error');
    inp.placeholder = '⚠ Please enter your name!';
    inp.focus();
    setTimeout(() => { inp.classList.remove('error'); inp.placeholder = 'e.g. Alex Johnson'; }, 2200);
    return;
  }
  state.playerName  = name;
  state.difficulty  = document.querySelector('.diff-btn.active')?.dataset.diff || 'all';
  state.currentQ    = 0;
  state.score       = 0;
  state.answered    = false;
  state.quiz        = pickQuestions(state.difficulty);
  state.startMs     = performance.now();
  state.endMs       = 0;

  startTimer();
  loadQuestion();
  showScreen('screen-quiz');
}

function resetToStart() {
  clearInterval(state.timerHandle);
  document.getElementById('playerName').value = '';
  showScreen('screen-start');
}

/* Timer */
function startTimer() {
  clearInterval(state.timerHandle);
  state.timerHandle = setInterval(() => {
    const sec = ((performance.now() - state.startMs) / 1000).toFixed(1);
    document.getElementById('timerDisplay').textContent = sec + 's';
  }, 100);
}
function stopTimer() {
  clearInterval(state.timerHandle);
  state.endMs = performance.now();
}
function elapsedMs() { return state.endMs - state.startMs; }

/* Load a question */
function loadQuestion() {
  const q = state.quiz[state.currentQ];
  state.answered = false;

  document.getElementById('qCounter').textContent     = `Question ${state.currentQ + 1} / 10`;
  document.getElementById('scoreLive').textContent    = `Score: ${state.score}`;
  document.getElementById('progressFill').style.width = `${(state.currentQ / 10) * 100}%`;

  const badge    = document.getElementById('diffBadge');
  badge.textContent = q.difficulty.toUpperCase();
  badge.className   = `diff-badge ${q.difficulty}`;

  document.getElementById('qText').textContent = q.q;

  const fb = document.getElementById('feedback');
  fb.className = 'feedback';
  document.getElementById('feedbackStatus').textContent = '';
  document.getElementById('feedbackFact').textContent   = '';
  document.getElementById('nextWrap').style.display     = 'none';
  document.getElementById('nextBtn').textContent        =
    state.currentQ < 9 ? 'Next Question →' : 'See My Results →';

  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  q.opts.forEach((opt, idx) => {
    const letter = String.fromCharCode(65 + idx);
    const text   = opt.substring(3);
    const btn    = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = `<span class="opt-letter">${letter}</span><span>${esc(text)}</span>`;
    btn.addEventListener('click', () => pickAnswer(letter, btn, q));
    grid.appendChild(btn);
  });
}

/* Player picks an answer */
function pickAnswer(letter, btnEl, q) {
  if (state.answered) return;
  state.answered   = true;
  const isCorrect  = letter === q.ans;
  const allBtns    = document.querySelectorAll('.opt-btn');
  const correctIdx = q.ans.charCodeAt(0) - 65;

  allBtns.forEach(b => b.disabled = true);

  if (isCorrect) {
    btnEl.classList.add('correct');
    state.score++;
    sndCorrect();
    launchConfetti();
  } else {
    btnEl.classList.add('wrong');
    allBtns[correctIdx].classList.add('correct');
    sndWrong();
  }

  document.getElementById('scoreLive').textContent = `Score: ${state.score}`;

  const fb = document.getElementById('feedback');
  fb.className = 'feedback ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
  document.getElementById('feedbackStatus').textContent = isCorrect ? '✅ Correct! Well done!' : '❌ Not quite…';
  document.getElementById('feedbackFact').textContent   = '💡 ' + q.fact;
  document.getElementById('nextWrap').style.display     = 'flex';
}

/* Advance to next question or finish */
function nextQuestion() {
  state.currentQ++;
  if (state.currentQ >= 10) finishGame();
  else loadQuestion();
}

/* Game over */
function finishGame() {
  stopTimer();
  document.getElementById('progressFill').style.width = '100%';

  const ms      = elapsedMs();
  const secStr  = (ms / 1000).toFixed(1);
  const wrong   = 10 - state.score;
  const avgSec  = (ms / 1000 / 10).toFixed(1);

  const { id } = saveLB(state.playerName, state.score, ms, state.difficulty);
  state.lastEntryId = id;

  let emoji, msg, stars;
  if (state.score === 10) {
    emoji = '🎆'; stars = '⭐⭐⭐⭐⭐';
    msg   = `Absolute Genius! 🎆  All 10 correct in just ${secStr}s!`;
    sndFanfare();
    setTimeout(bigConfetti, 150);
  } else if (state.score >= 7) {
    emoji = '🦅'; stars = '⭐⭐⭐⭐';
    msg   = 'Great Job, Patriot! 🦅  You really know your USA facts!';
  } else {
    emoji = '🇺🇸'; stars = '⭐⭐⭐';
    msg   = 'Thanks for visiting the USA Booth! 🇺🇸  Keep exploring America!';
  }

  document.getElementById('rEmoji').textContent   = emoji;
  document.getElementById('rScore').textContent   = `${state.score}/10`;
  document.getElementById('rTime').textContent    = `⏱  Time: ${secStr} s`;
  document.getElementById('rStars').textContent   = stars;
  document.getElementById('rMsg').textContent     = msg;
  document.getElementById('sCorrect').textContent = state.score;
  document.getElementById('sWrong').textContent   = wrong;
  document.getElementById('sAvg').textContent     = avgSec + ' s';

  showScreen('screen-result');
}

/* ═══════════════════════════════════════════════════════════
   CONFETTI
═══════════════════════════════════════════════════════════ */
const USA_COLORS = ['#BF0A30', '#002868', '#FFD700', '#FFFFFF', '#7B1D2B', '#00c6ff'];

function launchConfetti() {
  if (typeof confetti === 'undefined') return;
  confetti({ particleCount: 55, spread: 65, origin: { y: 0.6 }, colors: USA_COLORS });
}

function bigConfetti() {
  if (typeof confetti === 'undefined') return;
  [0, 200, 400].forEach(d =>
    setTimeout(() => confetti({ particleCount: 90, spread: 90, origin: { y: 0.5 }, colors: USA_COLORS }), d)
  );
  setTimeout(() => {
    confetti({ particleCount: 80, angle:  60, spread: 55, origin: { x: 0, y: 0.6 }, colors: USA_COLORS });
    confetti({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1, y: 0.6 }, colors: USA_COLORS });
  }, 550);
}

/* ═══════════════════════════════════════════════════════════
   ADMIN PANEL
   Access: URL ?admin  OR click 🇺🇸 flag 7× within 5 seconds
═══════════════════════════════════════════════════════════ */
function openAdmin() {
  const lb = getLB();
  const statsEl = document.getElementById('adminStats');
  if (statsEl) {
    const topScore = lb.length ? lb[0].score : '—';
    const bestTime = lb.length ? (lb[0].timeMs / 1000).toFixed(1) + 's' : '—';
    statsEl.innerHTML = `
      <div class="admin-stat"><span class="as-val">${lb.length}</span><span class="as-lbl">Players</span></div>
      <div class="admin-stat"><span class="as-val">${topScore}/10</span><span class="as-lbl">Top score</span></div>
      <div class="admin-stat"><span class="as-val">${bestTime}</span><span class="as-lbl">Fastest time</span></div>
    `;
  }
  renderLB(null, 'adminLbContent');
  showScreen('screen-admin');
}

function adminReset() {
  if (!confirm('⚠️ Reset the leaderboard? This CANNOT be undone.')) return;
  localStorage.removeItem(LB_KEY);
  const msg = document.getElementById('adminMsg');
  msg.textContent = '✅ Leaderboard cleared successfully.';
  setTimeout(() => { msg.textContent = ''; }, 3000);
  openAdmin();
}

function adminCopy() {
  const lb = getLB();
  if (!lb.length) {
    document.getElementById('adminMsg').textContent = 'No data to copy.';
    return;
  }
  const lines = [
    'SJII Global Family Day — USA Booth Leaderboard',
    '='.repeat(50),
    'Rank | Name | Score | Time | Difficulty | Date',
    '-'.repeat(50),
  ];
  lb.forEach((e, i) => {
    lines.push(`${i + 1}. ${e.name} | ${e.score}/10 | ${(e.timeMs / 1000).toFixed(1)}s | ${e.difficulty || '—'} | ${e.date}`);
  });
  navigator.clipboard.writeText(lines.join('\n')).then(() => {
    const msg = document.getElementById('adminMsg');
    msg.textContent = '📋 Copied to clipboard!';
    setTimeout(() => { msg.textContent = ''; }, 3000);
  }).catch(() => {
    document.getElementById('adminMsg').textContent = 'Copy failed — try manually.';
  });
}
