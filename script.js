//                          Q1
// Check for Anagrams: Write a function that takes two strings
//  as input and returns true if the two strings are anagrams 
//  (meaning they contain the same letters in a different order).

    function checkAnagrams(str1, str2) {

            // remove any non-word characters and convert to lowercase
            let cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
            let cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();
            
            // check if the length of the two strings is the same
            if (cleanStr1.length !== cleanStr2.length) {
                return false;
            }
            
            // convert the strings to arrays and sort them
            let sortedStr1 = cleanStr1.split('').sort();
            let sortedStr2 = cleanStr2.split('').sort();
            
            // check if the two arrays are equal
            return sortedStr1.join('') === sortedStr2.join('');
    }

        function test1(){
                console.log("test1")
        var inpstr1=document.getElementById("inp1A")
        var inpstr2=document.getElementById("inp1B")

        var ans1=document.getElementById("ans1")
        var tes1=checkAnagrams(inpstr1.value ,inpstr2.value)

        var stchek="The Anagrams is : "
        if(ans1.innerHTML !==stchek){
                ans1.innerHTML=stchek
                ans1.innerHTML +=tes1
        }else{
                ans1.innerHTML +=tes1         
        }
        }

//                        Q2
// Slice an Array: Write a function that takes an array
//  and two indices as input and returns a new array that
//   contains the elements between the two indices.
                
    function sliceArray(arr, start, end) {
            // use slice method to extract elements between start and end indices
            return arr.slice(start, end + 1);
    }
    
    function test2(){
        console.log("test2")
        var inpstr1=document.getElementById("inp2A")
        var inpstr2=document.getElementById("inp2B")
        var inpstr3=document.getElementById("inp2C")
        var ans=document.getElementById("ans2")

        var myArray =splitStringIntoWords(inpstr1.value)
        var startindex=parseInt(inpstr2.value)
        var endindex=parseInt(inpstr3.value)

        var tes2 = sliceArray(myArray, startindex, endindex)
        
        var stchek="The new Array is : "
        if(ans.innerHTML !==stchek){
                ans.innerHTML=stchek
                ans.innerHTML +=tes2
        }else{
                ans.innerHTML +=tes2         
        }

    }

//                          Q3
// Split a String into Words: Write a function that takes a string
//  as input and returns an array of the words in that string.

    function splitStringIntoWords(str) {
            // remove any leading or trailing whitespace
            let trimmedStr = str.trim();
            // split the string into an array of words
            let wordsArray = trimmedStr.split(/\s+/);
            return wordsArray;
    }

    function test3(){
        console.log("test3")
        var inpstr1=document.getElementById("inp3A")
        var ans=document.getElementById("ans3")
        let wordsArray = splitStringIntoWords(inpstr1.value);
        var stchek="The Words is : "
        if(ans.innerHTML !==stchek){
                ans.innerHTML=stchek
                ans.innerHTML +=wordsArray
        }else{
                ans.innerHTML +=wordsArray
        }
    }

//                          Q4
// Calculate the Age Based on a Date of Birth: Write a function
//  that takes a date of birth as input and returns the age of the 
//  person as of today.

    function calculateAge(dateOfBirth) {
            // create a new date object for today's date
            let today = new Date();
            // calculate the difference in milliseconds between the two dates
            let differenceInMs = today.getTime() - dateOfBirth.getTime();
            // calculate the difference in years
            let yearsDifference = Math.floor(differenceInMs / (1000 * 60 * 60 * 24 * 365));
            return yearsDifference;
    }

    function test4(){
        console.log("test4")
        var inpstr1=document.getElementById("inp4A")
        var ans=document.getElementById("ans4")
        var birth = new Date(inpstr1.value);
        var birthdate = calculateAge(birth);
        var stchek="Your age is : "
        if(ans.innerHTML !==stchek){
                ans.innerHTML=stchek
                ans.innerHTML +=birthdate
        }else{
                ans.innerHTML +=birthdate
        }
    }

//                          Q5
// Check if a String is a Valid Email Address: Write a function
//  that takes a string as input and returns true if the string
//   is a valid email address

    function isValidEmail(email) {
            // regular expression pattern for email validation
            let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // test the pattern against the input email string
            return pattern.test(email);
    }

    function test5(){
        console.log("test5")
        var inpstr1=document.getElementById("inp5A")
        var ans=document.getElementById("ans5")
        var valid =""
        let isValid = isValidEmail(inpstr1.value);
        if(isValid==true){
                valid="valid"       
        }else{
                valid="not valid"    
        }
        var stchek="Email is : "
        if(ans.innerHTML !==stchek){
                ans.innerHTML=stchek
                ans.innerHTML +=valid
        }else{
                ans.innerHTML +=valid
        }
    }

//                          Q6
// Replace All Occurrences of a Substring in a String: Write a function that takes a 
// string, a substring, and a replacement string as input, and returns the same string 
// with all occurrences of the substring replaced with the replacement string.

    function replaceAll(str, substr, replacement) {
            // create a regular expression pattern with the substring to be replaced
            let pattern = new RegExp(substr, 'g');
            // use the replace() function with the pattern and replacement string
            return str.replace(pattern, replacement);
    }

    function test6(){
        console.log("test6")
        var inpstr1=document.getElementById("inp6A")
        var inpstr2=document.getElementById("inp6B")
        var inpstr3=document.getElementById("inp6C")
        var ans=document.getElementById("ans6")

        let newStr = replaceAll(inpstr1.value, inpstr2.value, inpstr3.value);
       
        var stchek="The new string is : "
        if(ans.innerHTML !==stchek){
                ans.innerHTML=stchek
                ans.innerHTML +=newStr
        }else{
                ans.innerHTML +=newStr
        }  
    }

//                          Q7
// Find the Second Smallest Value in an Array: Write a function that takes an array of 
// numbers as input and returns the second smallest value in that array

    function findSecondSmallest(arr) {
            // sort the array in ascending order
            arr.sort((a, b) => a - b);
            // return the second element in the sorted array
            return arr[1];
    }

    function test7(){
        console.log("test7")
        var inpstr1=document.getElementById("inp7A")
        var ans=document.getElementById("ans7")

        var myArray =splitStringIntoWords(inpstr1.value)
        var secondSmallest = findSecondSmallest(myArray);
       
        var stchek="Second Smallest Value is : "
        if(ans.innerHTML !==stchek){
                ans.innerHTML=stchek
                ans.innerHTML +=secondSmallest
        }else{
                ans.innerHTML +=secondSmallest
        }  
    }

//                          Q8
// Find the Difference Between Two Arrays: Write a function that takes two arrays as 
// input and returns an array that contains the elements that are in the first array but 
// not in the second array.

    function difference(arr1, arr2) {
            return arr1.filter(item => !arr2.includes(item));
    }

    function test8(){
        console.log("test8")
        var inpstr1=document.getElementById("inp8A")
        var inpstr2=document.getElementById("inp8B")
        var ans=document.getElementById("ans8")

        var myArray1 =splitStringIntoWords(inpstr1.value)
        var myArray2 =splitStringIntoWords(inpstr2.value)
        var diff = difference(myArray1, myArray2);
       
        var stchek="The difference Between Arrays is : "
        if(ans.innerHTML !==stchek){
                ans.innerHTML=stchek
                ans.innerHTML +=diff
        }else{
                ans.innerHTML +=diff
        }  
    }

//                          Q9
// Format a Time Duration: Write a function that takes a time duration (in seconds) as 
// input and returns a formatted string in the format of "X hours, Y minutes, Z seconds"

    function formatDuration(seconds) {
            let hours = Math.floor(seconds / 3600);
            let minutes = Math.floor((seconds % 3600) / 60);
            let remainingSeconds = seconds % 60;

            let result = "";
            if (hours > 0) {
                result += hours + " hour" + (hours > 1 ? "s" : "") + ", ";
            }
            if (minutes > 0) {
                result += minutes + " minute" + (minutes > 1 ? "s" : "") + ", ";
            }
            result += remainingSeconds + " second" + (remainingSeconds > 1 ? "s" : "");

            return result;
    }

    function test9(){
        console.log("test9")
        var inpstr1=document.getElementById("inp9A")
        var ans=document.getElementById("ans9")

        var format =formatDuration(inpstr1.value)
       
        var stchek="Format a Time is : "
        if(ans.innerHTML !==stchek){
                ans.innerHTML=stchek
                ans.innerHTML +=format
        }else{
                ans.innerHTML +=format
        }  
    }

//                          Q10
// Convert a String to CamelCase: Write a function that takes a string as input and 
// returns the same string in CamelCase (meaning each word is capitalized except for 
// the first word)

    function toCamelCase(str) {
            // Split the string by space and hyphen characters
            const words = str.split(/[ -]/);
            
            // Capitalize the first letter of each word except the first one
            for (let i = 1; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substring(1);
            }
            
            // Join the words together and return the result
            return words.join('');
    }

    function test10(){
        console.log("test10")
        var inpstr1=document.getElementById("inp10A")
        var ans=document.getElementById("ans10")

        var camelCaseString = toCamelCase(inpstr1.value)
       
        var stchek="Convert to CamelCase: "
        if(ans.innerHTML !==stchek){
                ans.innerHTML=stchek
                ans.innerHTML +=camelCaseString
        }else{
                ans.innerHTML +=camelCaseString
        }  
    }
