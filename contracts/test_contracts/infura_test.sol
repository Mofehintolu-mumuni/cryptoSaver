pragma solidity >=0.4.21 <0.6.0;

contract infura_test{

string public Namer;

struct names
{
string NameSent; 
}

uint[] public Name_set_count_store;


string[] public Name_set_store;

uint Name_set_counter;

constructor()public 
{
    string memory _Namer = "Warming up";
Name_set_counter++;
Name_set_count_store.push(Name_set_counter);
Name_set_store.push(_Namer);

Namer = _Namer;

}


modifier CheckCount()
{
    require((Name_set_counter > 0) && (Name_set_count_store.length > 0));
 _;
}


function SetName(string memory _Namer) CheckCount public returns(bool)
{
Name_set_counter++;
Name_set_count_store.push(Name_set_counter);
Namer = _Namer;
Name_set_store.push(_Namer);

return true;
}







}