function validEmail(str) {
  //your JS code here.
	var ans = helper(str);
	return ans;
}

	function helper(e) {
		var temp =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		return temp.test(e);
}


// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
