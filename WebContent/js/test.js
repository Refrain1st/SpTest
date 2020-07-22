var SPEEDTEST_SERVERS=[
	{	//this is my demo server, remove it
		name:" ", //user friendly name for the server
		server:"//fi.openspeed.org/", //URL to the server. // at the beginning will be replaced with http:// or https:// automatically
		dlURL:"garbage.php",  //path to download test on this server (garbage.php or replacement)
		ulURL:"empty.php",  //path to upload test on this server (empty.php or replacement)
		pingURL:"empty.php",  //path to ping/jitter test on this server (empty.php or replacement)
		getIpURL:"getIP.php"  //path to getIP on this server (getIP.php or replacement)
	},
	{	//this is my demo server, remove it
		name:" ",
		server:"//mpotdemo.fdossena.com/",
		dlURL:"garbage.php",
		ulURL:"empty.php",
		pingURL:"empty.php",
		getIpURL:"getIP.php"
	}
	//add other servers here, comma separated
];

//INITIALIZE SPEEDTEST
var s=new Speedtest();
s.setParameter("time_ul_max",15);
s.setParameter("time_dl_max",15); 
s.onupdate=function(data){ 
    I("dlText").textContent=(data.testState==1&&data.dlStatus==0)?"...":data.dlStatus;
    I("ulText").textContent=(data.testState==3&&data.ulStatus==0)?"...":data.ulStatus;
	I("pingText").textContent=data.pingStatus;
	I("jitText").textContent=data.jitterStatus;
}
s.onend=function(aborted){ 
    I("startStopBtn").className=""; 
    if(aborted){
		initUI();
    }
}
function selectServer(){ 
    s.selectServer(function(server){
        I("startStopBtn").style.display="";
        I("serverId").textContent=server.name;
    });
}
function loadServers(){
    I("startStopBtn").style.display="none"; 
    if(typeof SPEEDTEST_SERVERS === "string"){
        s.loadServerList(SPEEDTEST_SERVERS,function(servers){
            SPEEDTEST_SERVERS=servers;
            selectServer();
        });
    }else{
        s.addTestPoints(SPEEDTEST_SERVERS);
        selectServer();
    }
    
}

function startStop(){ //start/stop button pressed
	if(s.getState()==3){
		//speedtest is running, abort
		s.abort();
	}else{
		//test is not running, begin
		s.start();
		I("startStopBtn").className="running";
	}
}

//function to (re)initialize UI
function initUI(){
	I("dlText").textContent="";
	I("ulText").textContent="";
	I("pingText").textContent="";
	I("jitText").textContent="";
}

function I(id){return document.getElementById(id);}
