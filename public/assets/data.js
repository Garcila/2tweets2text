const data = [
  'Addington Highlands Public Libraries',
  'Essa Public Library',
  // 'New Tecumseth Public Libraries',
  // 'Admaston  Bromley Public Library',
  // 'Ajax Public Library',
  // 'Akwesasne First Nation Public Library',
  // 'Alderville First Nation Library',
  // 'Algonquins of Pikwakanagan First Nation',
  // 'Alnwick  Haldimand Public Library',
  // 'Alfred Plantagenet Public Library',
  // 'Anishinabe of Wauzhushk First Nation',
  // 'Armstrong Township Public Library',
  // 'Arnprior Public Library',
  // 'Asphodel  Norwood Township Public Library',
  // 'Assiginack Public Library',
  // 'Athens Township Public Library',
  // 'Atikokan Public Library',
  // 'Augusta Public Library',
  // 'Aundeck Omni Kaning First Nation Public Library',
  // 'Aurora Public Library',
  // 'Bancroft Public Library',
  // 'Barrie Public Library',
  // "Barry's Bay and Area Public Library",
  // 'Beausoleil First Nation Public Library',
  // 'Belleville Public Library',
  // 'Big Grassy First Nation Public Library',
  // 'Billings Township Public Library',
  // 'Bkejwanong First Nation Public Library',
  // 'Black River   Matheson Public Library',
  // 'Blind River Public Library',
  // 'Blue Mountain Public Library',
  // 'Bonfield Public Library',
  // 'Bonnechere Union Public Library',
  // 'Bracebridge Public Library',
  // 'Bradford West Gwillimbury Public Library',
  // 'Brampton Public Library',
  // 'Brant Public Library',
  // 'Brantford Public Library',
  // 'Brighton Public Library',
  // 'Brock Township Public Libraries',
  // 'Brockville Public Library',
  // 'Bromley   St. Michael Public Library',
  // 'Bruce County Public Library',
  // 'Bruce Mines and Plummer Public Library',
  // "Burk's Falls, Armour & Ryerson Union Public Library",
  // 'Burlington Public Library',
  // 'Caldwell First Nation Public Library',
  // 'Caledon Public Library',
  // 'Callander Public Library',
  // 'Cambridge Public Library',
  // 'Carleton Place Public Library',
  // 'Carlow   Mayo Public Library',
  // 'Casselman Public Library',
  // 'Cavan Monaghan Public Library',
  // 'Central Manitoulin Public Library',
  // 'Centre Hastings Public Library',
  // 'Champlain Public Library',
  // 'Chapleau Public Library',
  // 'Chippewa of the Thames First Nation Public Library',
  // 'Chippewas of Georgina Island First Nation Public Library',
  // 'Chippewas of Kettle and Stony Point First Nation Public Library',
  // 'Chippewas of Mnjikaning First Nation Public Library',
  // 'Chatham Kent Public Library',
  // 'Clarence   Rockland Public Library',
  // 'Clarington Public Library',
  // 'Clearview Public Library',
  // 'Cobalt Public Library',
  // 'Cobourg Public Library',
  // 'Cochrane Public Library',
  // 'Collingwood Public Library',
  // 'Constance Lake First Nation Public Library',
  // 'Cornwall Public Library',
  // 'Cramahe Township Public Library',
  // 'Curve Lake First Nation Public Library',
  // 'Deep River W.B. Lewis Public Library',
  // 'Delaware Nation First Nation Public Library',
  // 'Deseronto Public Library',
  // 'Dobie Public Library',
  // 'Dokis First Nation Public Library',
  // 'Dorion Public Library',
  // 'Douro   Dummer Township Public Library',
  // 'Dryden Public Library',
  // 'Dubreuilville Public Library',
  // 'Ear Falls Public Library',
  // 'East Ferris Public Library',
  // 'East Gwillimbury Public Library',
  // 'East Hawkesbury Township Public Library',
  // 'East Luther Grand Valley Township Public Library',
  // 'Edwardsburgh Cardinal Public Library',
  // 'Elgin County Public Library',
  // 'Elizabethtown   Kitley Township Public Library',
  // 'Elliot Lake Public Library',
  // 'Emo Township Public Library',
  // 'Englehart Public Library',
  // 'Essa Township Public Library',
  // 'Essex County Library',
  // 'Espanola Public Library',
  // 'Fauquier   Strickland Public Library',
  // 'Fort Erie Public LIbrary',
  // 'Fort Frances Public Library',
  // 'French River Public Library',
  // 'Front of Yonge Township Public Library',
  // 'Galway Cavendish & Harvey Township Public Library',
  // 'Gananoque Public Library',
  // 'Garden River First Nation Public Library',
  // 'Georgian Bay Public Library',
  // 'Georgina Public Libraries',
  // 'Gogama Public Library',
  // 'Gore Bay Union Public Library',
  // 'Grand Valley Public Library',
  // 'Gravenhurst Public Library',
  // 'Greater Madawaska Public Library',
  // 'Greater Sudbury Public Library',
  // 'Greenstone Public Library',
  // 'Grey Highlands Public Library',
  // 'Grimsby Public Library',
  // 'Guelph Public Library',
  // 'Haldimand County Public Library',
  // 'Haliburton County Public Library',
  // 'Halton Hills Public Library',
  // 'Hamilton Public Library',
  // 'Hanover Public Library',
  // 'Hastings Highlands Public Library',
  // 'Havelock Belmont Methuen Public Library',
  // 'Hawkesbury Public Library',
  // 'Head Clara and Maria Public Library',
  // 'Hearst Public Library',
  // 'Henvey Inlet First Nation Public Library',
  // 'Hilton Union Public Library',
  // 'Hornepayne Public Library',
  // 'Huntsville Public Library',
  // 'Huron County Library',
  // 'Huron Shores Public Library',
  // 'Ignace Township Public Library',
  // 'Innisfil Public Library',
  // 'Iroquois Falls Public Library',
  // 'City of Kawartha Lakes Public Library',
  // 'Kanhiote Tyendinaga Territory First Nation Public Library',
  // 'Kapuskasing Public Library',
  // 'Kearney and Area Public Library',
  // 'Kenora Public Library',
  // 'Killaloe Hagarty and Richards Public Library',
  // 'King Township Public Library',
  // 'Kingston Frontenac Public Library',
  // 'Kirkland Lake (Teck Centennial) Public Library',
  // 'Kitchener Public Library',
  // 'La Nation Public Library',
  // 'Lake of Bays Public Library',
  // 'Lambton County Library',
  // 'Lanark Highlands Public Library',
  // 'Larder Lake Public Library',
  // 'Latchford Public Library',
  // 'Laurentian Hills Public Library',
  // 'Leeds and the Thousand Islands Public Library',
  // 'Lennox and Addington County Public Library',
  // 'Lincoln Public Library',
  // 'London Public Library',
  // 'Loring, Port Loring and District (Argyle) Public Library',
  // 'M Chigeeng First Nation Public Library',
  // 'Magnetawan First Nation Public Library',
  // 'Magnetawan Public Library',
  // 'Marathon Public Library',
  // 'Marmora and Lake Public Library',
  // 'Manitouwadge Public Library',
  // 'Markham Public Library',
  // 'Markstay Warren Public Library',
  // 'Mattawa Public Library',
  // 'Mattice Val Cote Public Library',
  // 'McGarry Township Public Library',
  // 'McKellar Public Library',
  // 'McNab Braeside Township Public Library',
  // 'Meaford Public Library',
  // 'Merrickville Public Library',
  // 'Michipicoten First Nation Public Library',
  // 'Michipicoten Township Public Library',
  // 'Middlesex County Library',
  // 'Midland Public Library',
  // 'Milton Public Library',
  // 'Mississauga First Nation Public Library',
  // 'Mississaugas of New Credit First Nation Public Library',
  // 'Mississaugas of Scugog Island First Nation Public Library',
  // 'Mississauga Public Library',
  // 'Mississippi Mills Public Library',
  // 'Mono Township Public Library',
  // 'Moonbeam Public Library',
  // 'Muskoka Lakes Township Public Libraries',
  // 'Naotkamegwanning First Nation Public Library',
  // 'New Tecumseth Public Library',
  // 'Newmarket Public Library',
  // 'Niagara Falls Public Library',
  // 'Niagara on the Lake Public Library',
  // 'Ninda   Kikaendjigae   Wigammik First Nation Public Library',
  // 'Nipigon Public Library',
  // 'Norfolk County Public Library',
  // 'North Bay Public Library',
  // 'North Caribou Lake First Nation Public Library',
  // 'North Grenville Public Library',
  // 'North Kawartha Public Library',
  // 'North Perth Public Library',
  // 'Northeastern Manitoulin and the Islands Public Library',
  // 'Oakville Public Library',
  // 'Ojibways of the Pic Rivers First Nation Public Library',
  // 'Oliver Paipoonge Public Library',
  // 'Oneida First Nation Public Library',
  // 'Orangeville Public Library',
  // 'Opusatika Public Library',
  // 'Orillia Public Library',
  // 'Oshawa Public Library',
  // 'Otonabee   South Monaghan Public Library',
  // 'Ottawa Public Library',
  // 'Owen Sound & North Grey Union Public Library',
  // 'Oxford County Public Library',
  // 'Parry Sound Public Library',
  // 'Pelham Public Library',
  // 'Pembroke Public Library',
  // 'Penetanguishene Public Library',
  // 'Perry Township Public Library',
  // 'Perth and District Union Public Library',
  // 'Perth East Public Library',
  // 'Petawawa Public Library',
  // 'Peterborough Public Library',
  // 'Phelps Public Library',
  // 'Pickering Public Library',
  // 'Port Colborne Public Library',
  // 'Port Hope Public Library',
  // 'Powassan & District Union Public Library',
  // 'Prescott Public Library',
  // 'Prince Edward County Public Library',
  // 'Prince Township Public Library',
  // 'Quinte West Public Library',
  // 'Rainy River First Nation Public Library',
  // 'Rainy River Public Library',
  // 'Ramara Township Public Library',
  // 'Red Rock Public Library',
  // 'Red Lake Public Library',
  // 'Region of Waterloo Public Library',
  // 'Renfrew Public Library',
  // 'Richmond Hill Public Library',
  // 'Rideau Lakes Union Public Library',
  // 'Russell Township Public Library',
  // 'Sachigo Lake First Nation Public Library',
  // 'Sagamok Anishnawbek First Nation Public Library',
  // 'Saugeen First Nation Public Library',
  // 'Sables   Spanish River Public Library',
  // 'Sault Ste. Marie',
  // 'Schreiber Public Library',
  // 'Scugog Memorial Public Library',
  // 'Seguin Public Libraries',
  // 'Seine River First Nation Public Library',
  // 'Serpent River First Nation Public Library',
  // 'Severn Township Public Library',
  // 'Shelburne Public Library',
  // 'Sheshegwaning First Nation Public Library',
  // 'Sioux Lookout Public Library',
  // 'Sioux Narrows Public Library',
  // 'Six Nations First Nation Public Library',
  // 'County of Simcoe Library Co op',
  // 'Smith Ennismore Lakefield Public Library',
  // 'Smiths Falls Public Library',
  // 'Smooth Rock Falls Public Library',
  // 'Township of South Algonquin Public Library',
  // 'South River Machar Union Public Library',
  // 'Southgate   Ruth Hargrave Memorial Public Library',
  // 'Spanish Public Library',
  // 'Springwater Township Public Library',
  // 'St. Catharines Public Library',
  // 'St. Charles Public Library',
  // 'St. Joseph Township Public Library',
  // 'St. Marys Public Library',
  // 'St. Thomas Public Library',
  // 'Stirling   Rawdon Public Library',
  // 'Stormont, Dundas & Glengarry County Library',
  // 'Stratford Public Library',
  // 'Greater Sudbury Public Library',
  // 'Sundridge   Strong Union Public Library',
  // 'Tay Public Library',
  // 'Tehkummah Township Public Library',
  // 'Temagami Public Library',
  // 'Temiskaming Shores Public Library',
  // 'Terrace Bay Public Library',
  // 'Thessalon First Nation Public Library',
  // 'Thessalon Union Public Library',
  // 'Thorold Public Library',
  // 'Thunder Bay Public Library',
  // 'Timmins Public Library',
  // 'Toronto Public Library',
  // 'Trent Hills Public Library',
  // 'Tudor and Cashel Township Public Library',
  // 'Tweed Public Library',
  // 'Tyendinaga Township Public Library',
  // 'Uxbridge Public Library',
  // 'Val Rita   Harty Public Library',
  // 'Vaughan Public Libraries',
  // 'Virtual Reference Library',
  // 'Wahta Mohawks First Nation Public Library',
  // 'Wainfleet Township Public Library',
  // 'Wasaga Beach Public Library',
  // 'Wasauksing First Nation Public Library',
  // 'Waterloo Public Library',
  // 'Waterloo Regional Library',
  // 'Welland Public Library',
  // 'Wellington County Public Library',
  // 'West Grey Public Library',
  // 'West Lincoln Public Library',
  // 'West Nipissing Public Library',
  // 'West Perth Public Library',
  // 'Westport Public Library',
  // 'Whitby Public Library',
  // 'Whitchurch Stouffville Public Library',
  // 'Whitefish River First Nation Public Library',
  // 'White River Public Library',
  // 'Whitestone Hagerman Public Library',
  // 'Whitewater Region Public Library',
  // 'Wikwemikong First Nation Public Library',
  // 'Windsor Public Library',
  // 'Wollaston and Limerick Union Public Library',
  // 'Woodstock Public Library',
];

exports.data = data;
