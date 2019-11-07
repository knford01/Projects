var app = angular.module('myApp',[]);
		app.controller('SubjectCtrl', function($scope, $http) {
		
		// CALL SUBJECT TABLE
		
			$http.get("http://localhost:8080/SubjectAllAddresses/")
				.then(  function(response) {console.log(response);
					$scope.properties = response.data;});

		// CALL MULTIPLIERS TABLE
		
				$http.get("http://localhost:8080/MultipliersGetAll/")
				.then(  function(response) {console.log(response);
					$scope.multiplier = response.data;});
					
		// CREATE VARIABLES TO ADD NEW SUBJECT	
		
			$scope.q1;
			$scope.q2;
			$scope.q3;
			$scope.q4;
			$scope.q5;
			$scope.q6;
			$scope.q7;
			$scope.q8;
			$scope.q9;

			$scope.makeurl = function (Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9) {
			var url = 'http://localhost:8080/AddSubject/?Address='+Q1+'&SQFT='+Q2+'&Condition='+Q4+'&Exterior='+Q3+'&GarageCap='+Q5+'&Kitchen='+Q6+'&Bathrooms='+Q7+
																				'&Flooring='+Q8+'&Fireplace='+Q9+'&varsum'
																				
			var data = {
				Q1: Q1,
				Q2: Q2,
				Q3: Q3,
				Q4: Q4,
				Q5: Q5,
				Q6: Q6,
				Q7: Q7,
				Q8: Q8,
				Q9: Q9
					   };
    
			console.log(url);
			console.log(data);
			console.log(JSON.stringify(data));

		//CALL THE SERVICES BY GIVING IT A URL THAT WE BUILT FROM USER INPUT

			$http.post(url).then(function (response) {

		//IF RESPONSE DATA IS ACCURATE, SAVE IT AND OUTPUT MESSAGE
			if (response.data)
				$scope.output = response.data;
				$scope.msg = "Put Data Method Executed Successfully!";
				}, function (response) {
					$scope.msg = "Service does not Exists";
					$scope.statusval = response.status;
					$scope.statustext = response.statusText;
					$scope.headers = response.headers();
						});
				};

		// PUT UPDATED INFORMATION INTO SUBJECT TABLE
		
		$scope.UpdateSubject = function (Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9) {
		var url = 'http://localhost:8080/UpdateSubject/'+Q1+'/'+Q2+'/'+Q4+'/'+Q3+'/'+Q5+'/'+Q6+'/'+Q7+'/'+Q8+'/'+Q9
                                      ///UpdateSubject/{ID}/{sqft}/{Condition}/{Exterior}/{GarageCap}/{Kitchen}/{Bathrooms}/{Flooring}/{Fireplace}
			console.log(url);
		//CALL THE SERVICES BY GIVING IT A URL THAT WE BUILT FROM USER INPUT

			$http.put(url).then(function (response) {

		//IF RESPONSE DATA IS ACCURATE, SAVE IT AND OUTPUT MESSAGE
			if (response.data)
				$scope.output = response.data;
				$scope.msg = "Put Data Method Executed Successfully!";
				}, function (response) {
					$scope.msg = "Service does not Exists";
					$scope.statusval = response.status;
					$scope.statustext = response.statusText;
					$scope.headers = response.headers();
						});
				};
				
		//FUNTION TO DELETE A SUBJECT PROPERTY

			$scope.deleteSubject = function(id) {
				$http.delete("http://localhost:8080/SubjectDelete/"+id)
					.then(  function(response) {console.log(response);
						$scope.properties = response.data;}
									);};

			$scope.UpdateSubject2 = function (Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9) {
				$http.put("http://localhost:8080/UpdateSubject/"+Q1+"/"+Q2+"/"+Q4+"/"+Q3+"/"+Q5+"/"+Q6+"/"+Q7+"/"+Q8+"/"+Q9)			
					.then(  function(response) {console.log(response);
						$scope.properties = response.data;}
									);};
									
		//FUNCTION TO CALL THE CMA TABLE
									
			$scope.CallCMA = function(xsqft, xvar) {
				$http.get("http://localhost:8080/SubjectAnswer/"+xsqft+"/"+xvar)
					.then(  function(response) {console.log(response);
						$scope.callAnswer = response.data;}
									);};
									});