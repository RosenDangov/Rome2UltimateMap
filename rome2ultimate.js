


function town_info(town_name,province_name,type){
    if(type == "gold"){
        return "<span style=\"font-weight:bold;\">"+town_name+" ("+province_name+")</span><br/><img src=\"img/gold.png\"> <span style=\"font-weight:bold;\">Gold</span><br/>0/-1/-4/-8 food <br/>200/350/500/700 mining wealth<br>+5%/10%/15%/20% mining wealth(global)<br>1/2/3/4 growth<br>0/0/0/5% commerce wealth(global)"
    }
    if(type == "marble"){
        return "<span style=\"font-weight:bold;\">"+town_name+" ("+province_name+")</span><br/><img src=\"img/marble.png\"> <span style=\"font-weight:bold;\">Marble</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 mining wealth<br>5%/10%/15%/20% cheaper construction<br>1/2/3/4 public order(global)<br>1/2/3/4 growth"
    }
    if(type == "silk"){
        return "<span style=\"font-weight:bold;\">"+town_name+" ("+province_name+")</span><br/><img src=\"img/silk.png\"> <span style=\"font-weight:bold;\">Silk</span><br/>0/-1/-4/-8 food <br/>100/150/200/250 local commerce<br>5%/10%/15%/20% commerce wealth(global)<br>0/1/2/3 public order<br>1/2/3/3 growth"
    }
    if(type == "leather"){
        return "<span style=\"font-weight:bold;\">"+town_name+" ("+province_name+")</span><br/><img src=\"img/leather.png\"> <span style=\"font-weight:bold;\">Leather</span><br/>0/-1/-4/-8 food <br/>100/150/200/250 local commerce<br>5%/10%/15%/20% manufacturing wealth(global)<br>1/2/3/4 growth"
    }
    if(type == "timber"){
        return "<span style=\"font-weight:bold;\">"+town_name+" ("+province_name+")</span><br/><img src=\"img/timber.png\"> <span style=\"font-weight:bold;\">Timber</span><br/>0/-1/-4/-8 food <br/>40/60/80/100 manufacturing wealth<br>5%/10%/15%/20% industry wealth<br>1/2/3/4 growth<br>0/1/2/3 public order<br>0/1/2/3 level hulls"
    }
    if(type == "oliveoil"){
        return "<span style=\"font-weight:bold;\">"+town_name+" ("+province_name+")</span><br/><img src=\"img/oliveoil.png\"> <span style=\"font-weight:bold;\">Olive oil</span><br/>1/2/4/8 food <br/>100/150/200/300 farming wealth<br>5%/10%/15%/20% agriculture wealth(global)<br>1/2/3/4 growth<br>0/1/2/3 public order"
    }
    if(type == "lead"){
        return "<span style=\"font-weight:bold;\">"+town_name+" ("+province_name+")</span><br/><img src=\"img/lead.png\"> <span style=\"font-weight:bold;\">Lead</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 mining wealth<br>+0/0/0/5% industry wealth (province<br>1/2/3/4 public order(global)<br>1/2/3/4 growth"
    }
    if(type == "dyes"){
        return "<span style=\"font-weight:bold;\">"+town_name+" ("+province_name+")</span><br/><img src=\"img/dyes.png\"> <span style=\"font-weight:bold;\">Dyes</span><br/>0/-1/-4/-8 food <br/>200/350/500/650 local commerce<br>+10%/20%/30%/40% manufacturing wealth (province)<br>1/2/4/6 public order(global)<br>1/2/3/4 growth"
    }
    if(type == "amber"){
        return "<span style=\"font-weight:bold;\">"+town_name+" ("+province_name+")</span><br/><img src=\"img/amber.png\"> <span style=\"font-weight:bold;\">Amber</span><br/>0/-1/-4/-8 food <br/>150/250/350/500 local commerce<br>2%/4%/6%/8% tariff income<br>1/2/3/4 public order<br>1/2/3/4 growth"
    }
    if(type == "glassware"){
        return "<span style=\"font-weight:bold;\">"+town_name+" ("+province_name+")</span><br/><img src=\"img/glassware.png\"> <span style=\"font-weight:bold;\">Glassware</span><br/>0/-1/-4/-8 food <br/>100/150/200/300 manufacturing wealth<br>4%/8%/12%/16% research rate<br>0/1/2/3 public order<br>1/2/3/4 growth"
    }
    if(type == "wine"){
        return "<span style=\"font-weight:bold;\">"+town_name+" ("+province_name+")</span><br/><img src=\"img/wine.png\"> <span style=\"font-weight:bold;\">Wine</span><br/>0/-1/-4/-8 food <br/>150/200/250/250 commerce wealth<br>+5%/10%/15%/20% commerce wealth (province)<br>1/2/3/4 public order(global)<br>1/2/3/4 growth"
    }
    if(type == "horses"){
        return "<span style=\"font-weight:bold;\">"+town_name+" ("+province_name+")</span><br/><img src=\"img/horses.png\"> <span style=\"font-weight:bold;\">Horses</span><br/>0/-2/-6 food <br/>100/200/300 livestock wealth<br>1/2/3 growth<br>5%/10%/20% bonus cavalry speed"
    }
    if(type == "iron"){
        return "<span style=\"font-weight:bold;\">"+town_name+" ("+province_name+")</span><br/><img src=\"img/iron.png\"> <span style=\"font-weight:bold;\">Iron</span><br/>0/-2/-6 food <br/>100/200/300 manufacturing wealth<br>1/2/3 growth<br>5%/10%/20% weapon damage or shields+armour"
    }
    if(type == "grain"){
        return "<span style=\"font-weight:bold;\">"+town_name+" ("+province_name+")</span><br/><img src=\"img/grain.png\"> <span style=\"font-weight:bold;\">Grain</span><br/>1/2/3/4 food per region in this and adjacent provinces<br/>40/60/80/100 farming wealth<br>+10%/20%/40%/80% farming wealth (province)<br>1/2/3/4 growth"
    }
}

$(function () {
    $(".mapcontainer").mapael({
        map: {
            // Set the name of the map to display
            name: "resources",
            defaultArea: {
                attrs: {
                    fill: "#000000",
                    stroke: "#ced8d0",
                    opacity: 0.5,
                },
                attrsHover: {
                    opacity: 1,
          	    }
      	    },
        }, legend:{
        	redrawOnResize: true,
            area:[{

            		cssClass:"areaLegend",	
                	hideElemsOnClick:{
                		opacity:0,
                		animDuration:250,
                	},
                	slices:[{
                		label:"Resources",
                		sliceValue:"Resources",
                		width:50,
                		height:50,
                		attrsHover:{
                			transform: "s1.25"
                		},	
                		legendSpecificAttrs:{
                			transform: "s3",
                		},
                	}],
            	},
            ],
        	plot:{
        		hideElemsOnClick:{
        			// enabled:true,
        			opacity: 0,
        			animDuration:250,
        		},
        		mode:"horizontal",
            	slices: [{
            		label:"",
            		sliceValue:"Wonders",
            		type: "image",
            		url: "img/wonder.png",
            		width:14,
            		height:14,
            		attrsHover:{
            			transform: "s1.75"
            		},
            		},
            		{
            		label:"",
            		sliceValue:"RegionWonders",
            		type: "image",
            		url: "img/regionwonder.png",
            		width:14,
            		height:14,
            		attrsHover:{
            			transform: "s1.75",
            		},
            		},
            	],
            },



        }, plots:{
        	'carthage':{
        		x:290,
        		y:540,
        		tooltip:{content:"<b>Carthago</b><br><i>All trade passes through here.</i><br>+25% wealth from all commerce"},
        		value:"RegionWonders",
        	},
        	'rome':{
        		x:330,
        		y:420,
        		tooltip:{content:"<b>Rome</b><br><i>The large population provides many warm bodies to fill the ranks of the army.</i><br>+15% wealth from all sources<br>+2 army recruitment capacity"},
        		value:"RegionWonders",
        	},
        	'antioch':{
        		x:665,
        		y:510,
        		tooltip:{content:"<b>Antioch</b><br><i>Happiness abounds in the golden city.</i><br>+6 public order"},
        		value:"RegionWonders",
        	},
        	'pella':{
        		x:485,
        		y:440,
        		tooltip:{content:"<b>Pella</b><br><i>The mines nearby are the reason the Macedonian Kings chose this place as their capital.</i><br>+25% wealth from industry"},
        		value:"RegionWonders",
        	},
        	'stonehenge':{
        		x:142,
        		y:197,
        		tooltip:{content:"<b>Stonehenge</b><br><i>\"Their legacy remains, hewn into the living rock of Stonehenge.\"</i><br>+10% civil research rate<br>-20% public order penalties from cultural differences"},
        		value: "Wonders"
        	},
        	'karnag':{
        		x:117,
        		y:275,
        		tooltip:{content:"<b>The Dolmens of Karnag</b><br><i>\"Swirled in mist and mystery these stones have much to tell.\"</i><br>+10% military research rate<br>+4 growth per turn (global)"},
        		value: "Wonders"
        	},
        	'hercules':{
        		x:77,
        		y:534,
        		tooltip:{content:"<b>Pillars of Hercules</b><br><i>\"Great pillars created by the might of Hercules.\"</i><br>+5% movement range for all fleets<br>-10% naval unit recruitment cost"},
        		value: "Wonders"
        	},
        	'hercules2':{
        		x:77,
        		y:564,
        		tooltip:{content:"<b>Pillars of Hercules</b><br><i>\"Great pillars created by the might of Hercules.\"</i><br>+5% movement range for all fleets<br>-10% naval unit recruitment cost"},
        		value: "Wonders"
        	},
        	'vesuvius':{
        		x:352,
        		y:432,
        		tooltip:{content:"<b>Mount Vesuvius </b><br><i>\"Those living in the shadow of Vesuvius respect its power.\"</i><br>+5% morale for all armies and fleets<br>+5% wealth from agriculture(global)"},
        		value: "Wonders"
        	},
        	'etna':{
        		x:347,
        		y:523,
        		tooltip:{content:"<b>Mount Etna</b><br><i>\"Home of the mighty Hephaestus forge and prison to the monster Typhon.\"</i><br>+5% armour for all armies and fleets<br>+10% wealth from agriculture(global)"},
        		value: "Wonders"
        	},
        	'greatgods':{
        		x:505,
        		y:410,
        		tooltip:{content:"<b>The Sanctuary of the Great Gods</b><br><i>\"In the heart of the Sanctuary the Great Gods wait...\"</i><br>+4 growth per turn (global)<br>+4 cultural influence(global)"},
        		value: "Wonders"
        	},
        	'olympus':{
        		x:465,
        		y:455,
        		tooltip:{content:"<b>Mount Olympus</b><br><i>\"Home of the Gods and mightiest of mountains.\"</i><br>-20% public order penalties from cultural differences<br>Bread and Games Edict: +25% wealth generated by culture"},
        		value: "Wonders"
        	},
        	'zeus':{
        		x:450,
        		y:492,
        		tooltip:{content:"<b>Statue of Zeus at Olympia</b><br><i>\"It is a wonder, to look upon the face of a God.\"</i><br>+10% wealth from culture<br>Bread and Games Edict: +10 public order"},
        		value: "Wonders"
        	},
        	'amunra':{
        		x:523,
        		y:674,
        		tooltip:{content:"<b>Oracle of Amun-Ra</b><br><i>\"Only the worthy may hear the words of the oracle.\"</i><br>+2 public order (global)<br>-20% resistance to foreign occupation"},
        		value: "Wonders"
        	},
        	'giza':{
        		x:566,
        		y:655,
        		tooltip:{content:"<b>The Necropolis of Giza</b><br><i>\"The swirling sands hold the greatest treasures.\"</i><br>-5% construction costs<br>+5% wealth from culture"},
        		value: "Wonders"
        	},
        	'pharos':{
        		x:550,
        		y:635,
        		tooltip:{content:"<b>The Pharos of ALexandria</b><br><i>\"May its light be a beacon when all other lights go out.\"</i><br>+20 line of sight to fleets<br>+15% wealth from maritime commerce buildings"},
        		value: "Wonders"
        	},
        	'colossus':{
        		x:545,
        		y:525,
        		tooltip:{content:"<b>The Colossus of Rhodes</b><br><i>\"To you, O Sun, the people of Dorian Rhodes set up this bronze statue reaching to Olympus.\"</i><br>+2% tariff income from trade<br>+1 fleet recruitment capacity"},
        		value: "Wonders"
        	},
        	'mausoleum':{
        		x:552,
        		y:494,
        		tooltip:{content:"<b>Mausoleum of Mausollus</b><br><i>\"A memorial of his own fame and of the sculptor's art.\"</i><br>-3% construction costs<br>+2% tax rage"},
        		value: "Wonders"
        	},
        	'argaeus':{
        		x:630,
        		y:485,
        		tooltip:{content:"<b>Mount Argaeus</b><br><i>\"Mount Argaeus, the highest mountain of all.\"</i><br>+20 line of sight to armies<br>+5% movement range for armies"},
        		value: "Wonders"
        	},
        	'babylon':{
        		x:775,
        		y:589,
        		tooltip:{content:"<b>The Great City of Babylon</b><br><i>\"A city of breathtaking beauty and wonder.\"</i><br>+3% civil research rate<br>+2 growth per turn"},
        		value: "Wonders"
        	},
        	'behistun':{
        		x:808,
        		y:538,
        		tooltip:{content:"<b>Mount Behistun</b><br><i>\"Temples may burn to the ground but mountains last forever.\"</i><br>+3% military research rate<br>-20% resistance to foreign occupation"},
        		value: "Wonders"
        	},
        	'davamand':{
        		x:850,
        		y:515,
        		tooltip:{content:"<b>Mount Davamand</b><br><i>\"Within the depths of this mountain lies a terrible monster.\"</i><br>+2 public order<br>+5% missile attack range for all archers in armies and fleets"},
        		value: "Wonders"
        	},
        	'rostam':{
        		x:870,
        		y:600,
        		tooltip:{content:"<b>Necropolis of Rostam</b><br><i>\"Great men should never be lain to rest in the cold ground.\"</i><br>+3% morale for all units<br>-3% land unit recruitment cost"},
        		value: "Wonders"
        	},
        	'bam':{
        		x:925,
        		y:575,
        		tooltip:{content:"<b>Bam Citadel</b><br><i>\"The greatest citadel ever built. All others pale in comparison.\"</i><br>-10% attritional losses when under siege<br>+2 siege hold-out time"},
        		value: "Wonders"
        	},

        },areas: {
            "moridunon-resource-gold":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
                value: "Resources",
                href: "#",
                tooltip: {content: town_info("Moridunon","Britannia","gold")},
            },
            "nemossos-resource-gold":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
                value: "Resources",
                href: "#",
                tooltip: {content: town_info("Nemossos","Aquitania","gold")},
            },
            "istros-resource-gold":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
                value: "Resources",
                href: "#",
                tooltip: {content: town_info("Istros","Hercynia","gold")},
            },
            "aksum-resource-gold":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
                value: "Resources",
                href: "#",
                tooltip: {content: town_info("Aksum","Aethiopia","gold")},
            },
            "gabala-resource-gold":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
                value: "Resources",
                href: "#",
                tooltip: {content: town_info("Gabala","Caucasia","gold")},
            },
            "eucratideia-resource-gold":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
                value: "Resources",
                href: "#",
                tooltip: {content: town_info("Eucratideia","Bactria","gold")},
            },
            "bam-resource-marble":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: town_info("Bam","Carmania","marble")},
            },
            "iader-resource-marble":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Iader","Illyria","marble")},
            },
            "sparta-resource-marble":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Sparta","Hellas","marble")},
            },
            "pergamon-resource-marble":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Pergamon","Asia","marble")},
            },
            "aracillum-resource-marble":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Aracillum","Tarraconensis","marble")},
            },
            "yathrib-resource-marble":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Yathrib","Arabia Magna","marble")},
            },
            "edessa-resource-silk":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: town_info("Edessa","Mesopotamia","silk")},
            },
            "susia-resource-silk":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Susia","Parthia","silk")},
            },
            "bukhara-resource-silk":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Bukhara","Transoxania","silk")},
            },
            "eborakon-resource-leather":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
				value: "Resources",
            	href: "#",
            	tooltip: {content: town_info("Eborakon","Britannia","leather")},
            },
            "uburzis-resource-leather":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
				value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Uburzis","Magna Germania","leather")},
            },
            "galic-resource-leather":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
				value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Galic","Sarmatia","leather")},
            },
            "gelonus-resource-leather":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
				value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Gelonus","Scythia","leather")},
            },
            "namnetum-resource-timber":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: town_info("Namnetum","Celtica","timber")},
            },
            "iol-resource-timber":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Iol","Mauretania","timber")},
            },
            "rhougion-resource-timber":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Rhougion","Suebia","timber")},
            },
            "sinope-resource-timber":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Sinope","Bithynia et Pontus","timber")},
            },
            "kapisene-resource-timber":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Kapisene","Arachosia","timber")},
            },
            "tolosa-resource-oliveoil":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: town_info("Tolosa","Provincia","oliveoil")},
            },
            "arse-resource-oliveoil":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Arse","Cartaginensis","oliveoil")},
            },
            "neapolis-resource-oliveoil":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Neapolis","Italia","oliveoil")},
            },
            "jerusalem-resource-oliveoil":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Jerusalem","Nabataea","oliveoil")},
            },
            "belz-resource-lead":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
            	tooltip: {content: town_info("Belz","Silesia","lead")},
            },
            "navissos-resource-lead":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Navissos","Thracia","lead")},
            },
            "merv-resource-lead":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Merv","Aria","lead")},
            },
            "maasgat-resource-lead":{
				attrs:{
					fill:"#493D31"
				},
				attrsHover:{
					fill:"#493D31",
				},
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Maas-gat","Arabia Felix","lead")},
            },
            "migdol-resource-dyes":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: town_info("Migdol","Mauretania","dyes")},
            },
            "tyros-resource-dyes":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Tyros","Syria","dyes")},
            },
            "alabu-resource-amber":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: town_info("Alabu","Suebia","amber")},
            },
            "ascaucalis-resource-amber":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Ascaucalis","Suebia","amber")},
            },
            "monsregius-resource-amber":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Mons Regius","Sarmatia","amber")},
            },
            "patavium-resource-glassware":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: town_info("Patavium","Cisalpina","glassware")},
            },
            "salamis-resource-glassware":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Salamis","Cilicia","glassware")},
            },
            "bagacum-resource-glassware":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Bagacum","Germania Minor","glassware")},
            },
            "palmyra-resource-glassware":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Palmyra","Syria","glassware")},
           },
            "susa-resource-glassware":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Susa","Persis","glassware")},
            },
            "gadira-resource-wine":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: town_info("Gadira","Baetica","wine")},
            },
            "velathri-resource-wine":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Velathri","Italia","wine")},
            },
            "apollonia-resource-wine":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Apollonia","Macedonia","wine")},
            },
            "samosata-resource-wine":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Samosata","Galatia et Cappadocia","wine")},
            },
            "phanagoria-resource-wine":{
                attrs:{
                    fill:"#7256AB"
                },
                attrsHover:{
                    fill:"#7256AB"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Phanagoria","Bosporus","wine")},
            },
            "brigantium-resource-horses":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: town_info("Brigantium","Tarraconensis","horses")},
            },
            "treverorum-resource-horses":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Treverorum","Belgica","horses")},
            },
            "larissa-resource-horses":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Larissa","Macedonia","horses")},
            },
            "zadrakarta-resource-horses":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Zadrakarta","Parthia","horses")},
            },
            "dimmidi-resource-horses":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Dimmidi","Mauretania","horses")},
            },
            "siracena-resource-horses":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Siracena","Ponto-Caspia","horses")},
            },
            "olisipo-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: town_info("Olisipo","Lusitania","iron")},
            },
            "lemonum-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Lemonum","Aquitania","iron")},
            },
            "koria-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Koria","Raetia et Noricum","iron")},
            },
            "segestica-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Segestica","Pannonia","iron")},
            },
            "diospolis-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Diospolis","Aegyptus","iron")},
            },
            "mazaca-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Mazaca","Galatia et Cappadocia","iron")},
            },
            "tushpa-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Tushpa","Armenia","iron")},
            },
            "rhaga-resource-iron":{
                attrs:{
                    fill:"#A42306"
                },
                attrsHover:{
                    fill:"#A42306"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Rhaga","Media Magna","iron")},
            },
            "lepcis-resource-grain":{
                attrs:{
                    fill:"#3E7529"
                },
                attrsHover:{
                    fill:"#3E7529"
                },
            	value: "Resources",
            	href: "#",
            	tooltip: {content: town_info("Lepcis","Africa","grain")},
            },
            "syracusae-resource-grain":{
                attrs:{
                    fill:"#3E7529"
                },
                attrsHover:{
                    fill:"#3E7529"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Syracusae","Magna Graecia","grain")},
            },
            "akink-resource-grain":{
                attrs:{
                    fill:"#3E7529"
                },
                attrsHover:{
                    fill:"#3E7529"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Akink","Pannonia","grain")},
            },
            "malva-resource-grain":{
                attrs:{
                    fill:"#3E7529"
                },
                attrsHover:{
                    fill:"#3E7529"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Malva","Dacia","grain")},
            },
            "memphis-resource-grain":{
                attrs:{
                    fill:"#3E7529"
                },
                attrsHover:{
                    fill:"#3E7529"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Memphis","Aegyptus","grain")},
            },
            "myoshormos-resource-grain":{
                attrs:{
                    fill:"#3E7529"
                },
                attrsHover:{
                    fill:"#3E7529"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Myos Hormos","Aegyptus","grain")},
            },
            "charax-resource-grain":{
                attrs:{
                    fill:"#3E7529"
                },
                attrsHover:{
                    fill:"#3E7529"
                },
            	value: "Resources",
            	href: "#",
                tooltip: {content: town_info("Charax","Mesopotamia","grain")},
            },
        },
    });
});
$(document).ready(function() {
    $(document).keydown(function(e) {
        if (e.keyCode == '69') {
        	if($('.map').css('display') == 'block'){
        		$('.map').css('display','none');
        	}
        	else if($('.map').css('display') == 'none'){
        		$('.map').css('display','block');
        	}

        }
    });
});


$(document).keydown(function(event) {
if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        event.preventDefault();
     }
    // 107 Num Key  +
    // 109 Num Key  -
    // 173 Min Key  hyphen/underscor Hey
    // 61 Plus key  +/= key
});

$(window).bind('mousewheel DOMMouseScroll', function (event) {
       if (event.ctrlKey == true) {
       event.preventDefault();
       }
});

