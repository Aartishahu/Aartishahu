var rows = 6;		// Number N
    
//Print the pattern
for ( i = 1; i <= rows; i++)    // outer loop
{

      for ( j = 1; j < i; j++)    // inner loop 1
      {
              
         document.write("&nbsp;");  
      } 
      for ( j = i; j <= rows; j++)     // inner loop 2
                {
              
          document.write(j +  " ");
               
      } 
     document.write("<br>");
      
  }       


