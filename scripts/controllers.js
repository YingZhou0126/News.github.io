
// 实例一个模块，用来专门管理所有的控制器
angular.module('Controllers', [])


// 导航菜单
.controller('NavController', ['$scope', function ($scope) {
	// 导航数据
	$scope.navs = [
		{link: '#/today', text: 'Life', icon: 'icon-home'},
		{link: '#/older', text: 'Old', icon: 'icon-file-empty'},
        {link: '#/tech', text: 'tech', icon: 'icon-home'}
	];
}])

	//// login
.controller('LoginController', ['$rootScope','$scope','$http', function ($rootScope, $scope, $http) {

    $rootScope.title = 'login';
    $rootScope.loaded = true;

    $scope.submit = function () {

        $http({
            url: './api/user.php',
            method: 'get',
			params: {email: $scope.email, password: $scope.password}
        }).success(function (info) {

			if (info){

                sessionStorage.setItem('username', $scope.email);
                $rootScope.user = sessionStorage.getItem("username");
                $rootScope.logined = false;
                window.location = "#/index";
			}
			else{
				$scope.me = true;
				$scope.message = 'invalid email or password';
			}
        });
    };

    $scope.leave = function () {
        window.location = "#/index";
    };


}])

// Tech
.controller('TechController', ['$scope', '$http', '$filter', '$rootScope', function ($scope, $http, $filter, $rootScope) {

    //
    $rootScope.title = 'tech';
    $rootScope.index = 2;
    $rootScope.loaded = false;

    $http({
        url: './api/tech.php',
        method: 'get',
    }).success(function (info) {

        $rootScope.loaded = true;

        console.log(info.articles);

        $scope.date = info.date;

        $scope.posts = info.articles;
    });

}])

// Life
.controller('LifeController', ['$scope', '$http', '$filter', '$rootScope', function ($scope, $http, $filter, $rootScope) {

	//
	$rootScope.title = 'life';
	$rootScope.index = 0;
	$rootScope.loaded = false;

	$http({
		url: './api/today.php', // 请求地址，解决跨域问题
		method: 'get',
	}).success(function (info) {

		$rootScope.loaded = true;

		console.log(info.articles);
		// 日期
		$scope.date = info.date;
		// 文章数据
		$scope.posts = info.articles;
	});

}])

// 往期内容
.controller('OlderController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
	
	$rootScope.title = 'what happened';
	$rootScope.index = 1;
	$rootScope.loaded = false;

	//
	$http({
		url: './api/older.php', //
	}).success(function (info) {

		$rootScope.loaded = true;

		console.log(info.articles);

		$scope.date = info.date;
		$scope.posts = info.articles;
	});

}]);
