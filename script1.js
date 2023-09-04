alert("Welcome to Durkasell.ru!\nHere you need to mine shizium and sell it\nA costs 10 shizocoins, B - 25 and C - 50. Upgrading the internet speeds up shizium mining and increases the chance of getting better shizium. The miner mines shizium every 3 seconds. When you mine, something can happen. It can be good or bad. I won't say anything about upgrading your computer. You'll find out yourself.")
var shiziumA = 0;
var shiziumB = 0;
var shiziumC = 0;
var coins = 100;
var minebar = 0;
var barmax = 100;
var level = 1;
var upcost = 100;
var miners = 0;
var minercost = 500;
var pclevel = 1;
var pccost = 1000;
var tmgot = false;

function mine(){
minebar += level;
document.getElementById("bar").value = minebar;
document.getElementById("mp").innerHTML = minebar + "/" + barmax;
event();
if(minebar >= barmax){
get();
document.getElementById("s").innerHTML = "Shizium A: " + shiziumA + ", Shizium B: " + shiziumB + ", Shizium C: " + shiziumC;
minebar = 0;
document.getElementById("bar").value = minebar;
document.getElementById("mp").innerHTML = minebar + "/" + barmax;
}
}

function get(){
var rand = Math.ceil(Math.random()*100)+level*5;
if(rand >= 90){
shiziumC++;
document.getElementById("s").innerHTML = "Shizium A: " + shiziumA + ", Shizium B: " + shiziumB + ", Shizium C: " + shiziumC;
}else if(rand >= 60){
shiziumB++;
document.getElementById("s").innerHTML = "Shizium A: " + shiziumA + ", Shizium B: " + shiziumB
