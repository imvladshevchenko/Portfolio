(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var navBar = document.getElementById("navBar");
var burger = document.getElementById("burger");
var mobileMenu = document.getElementById("mobileNav");
document.addEventListener("scroll", function () {
  if (window.pageYOffset < navBar.clientHeight) {
    navBar.classList.remove("filled");
    burger.classList.remove("filled");
  } else {
    navBar.classList.add("filled");
    burger.classList.add("filled");
  }
});

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9jYmQvc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUFuQjtBQUdBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxZQUFNO0FBQ3hDLE1BQUksTUFBTSxDQUFDLFdBQVAsR0FBcUIsTUFBTSxDQUFDLFlBQWhDLEVBQThDO0FBQzVDLElBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsUUFBeEI7QUFDQSxJQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixHQUFqQixDQUFxQixRQUFyQjtBQUNBLElBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsR0FBakIsQ0FBcUIsUUFBckI7QUFDRDtBQUNGLENBUkQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2QmFyXCIpO1xyXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1cmdlclwiKTtcclxuY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9iaWxlTmF2XCIpO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCBuYXZCYXIuY2xpZW50SGVpZ2h0KSB7XHJcbiAgICBuYXZCYXIuY2xhc3NMaXN0LnJlbW92ZShcImZpbGxlZFwiKTtcclxuICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsbGVkXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcImZpbGxlZFwiKTtcclxuICAgIGJ1cmdlci5jbGFzc0xpc3QuYWRkKFwiZmlsbGVkXCIpO1xyXG4gIH1cclxufSk7Il0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p3Y205cVpXTjBjeTlqWW1RdmMzSmpMMnB6TDJGd2NDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN08wRkRRVUVzU1VGQlRTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMR05CUVZRc1EwRkJkMElzVVVGQmVFSXNRMEZCWmp0QlFVTkJMRWxCUVUwc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eGpRVUZVTEVOQlFYZENMRkZCUVhoQ0xFTkJRV1k3UVVGRFFTeEpRVUZOTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1kwRkJWQ3hEUVVGM1FpeFhRVUY0UWl4RFFVRnVRanRCUVVkQkxGRkJRVkVzUTBGQlF5eG5Ra0ZCVkN4RFFVRXdRaXhSUVVFeFFpeEZRVUZ2UXl4WlFVRk5PMEZCUTNoRExFMUJRVWtzVFVGQlRTeERRVUZETEZkQlFWQXNSMEZCY1VJc1RVRkJUU3hEUVVGRExGbEJRV2hETEVWQlFUaERPMEZCUXpWRExFbEJRVUVzVFVGQlRTeERRVUZETEZOQlFWQXNRMEZCYVVJc1RVRkJha0lzUTBGQmQwSXNVVUZCZUVJN1FVRkRRU3hKUVVGQkxFMUJRVTBzUTBGQlF5eFRRVUZRTEVOQlFXbENMRTFCUVdwQ0xFTkJRWGRDTEZGQlFYaENPMEZCUTBRc1IwRklSQ3hOUVVkUE8wRkJRMHdzU1VGQlFTeE5RVUZOTEVOQlFVTXNVMEZCVUN4RFFVRnBRaXhIUVVGcVFpeERRVUZ4UWl4UlFVRnlRanRCUVVOQkxFbEJRVUVzVFVGQlRTeERRVUZETEZOQlFWQXNRMEZCYVVJc1IwRkJha0lzUTBGQmNVSXNVVUZCY2tJN1FVRkRSRHRCUVVOR0xFTkJVa1FpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpZ3BlMloxYm1OMGFXOXVJSElvWlN4dUxIUXBlMloxYm1OMGFXOXVJRzhvYVN4bUtYdHBaaWdoYmx0cFhTbDdhV1lvSVdWYmFWMHBlM1poY2lCalBWd2lablZ1WTNScGIyNWNJajA5ZEhsd1pXOW1JSEpsY1hWcGNtVW1KbkpsY1hWcGNtVTdhV1lvSVdZbUptTXBjbVYwZFhKdUlHTW9hU3doTUNrN2FXWW9kU2x5WlhSMWNtNGdkU2hwTENFd0tUdDJZWElnWVQxdVpYY2dSWEp5YjNJb1hDSkRZVzV1YjNRZ1ptbHVaQ0J0YjJSMWJHVWdKMXdpSzJrclhDSW5YQ0lwTzNSb2NtOTNJR0V1WTI5a1pUMWNJazFQUkZWTVJWOU9UMVJmUms5VlRrUmNJaXhoZlhaaGNpQndQVzViYVYwOWUyVjRjRzl5ZEhNNmUzMTlPMlZiYVYxYk1GMHVZMkZzYkNod0xtVjRjRzl5ZEhNc1puVnVZM1JwYjI0b2NpbDdkbUZ5SUc0OVpWdHBYVnN4WFZ0eVhUdHlaWFIxY200Z2J5aHVmSHh5S1gwc2NDeHdMbVY0Y0c5eWRITXNjaXhsTEc0c2RDbDljbVYwZFhKdUlHNWJhVjB1Wlhod2IzSjBjMzFtYjNJb2RtRnlJSFU5WENKbWRXNWpkR2x2Ymx3aVBUMTBlWEJsYjJZZ2NtVnhkV2x5WlNZbWNtVnhkV2x5WlN4cFBUQTdhVHgwTG14bGJtZDBhRHRwS3lzcGJ5aDBXMmxkS1R0eVpYUjFjbTRnYjMxeVpYUjFjbTRnY24wcEtDa2lMQ0pqYjI1emRDQnVZWFpDWVhJZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNoY0ltNWhka0poY2x3aUtUdGNjbHh1WTI5dWMzUWdZblZ5WjJWeUlEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb1hDSmlkWEpuWlhKY0lpazdYSEpjYm1OdmJuTjBJRzF2WW1sc1pVMWxiblVnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2hjSW0xdlltbHNaVTVoZGx3aUtUdGNjbHh1WEhKY2JseHlYRzVrYjJOMWJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLRndpYzJOeWIyeHNYQ0lzSUNncElEMCtJSHRjY2x4dUlDQnBaaUFvZDJsdVpHOTNMbkJoWjJWWlQyWm1jMlYwSUR3Z2JtRjJRbUZ5TG1Oc2FXVnVkRWhsYVdkb2RDa2dlMXh5WEc0Z0lDQWdibUYyUW1GeUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb1hDSm1hV3hzWldSY0lpazdYSEpjYmlBZ0lDQmlkWEpuWlhJdVkyeGhjM05NYVhOMExuSmxiVzkyWlNoY0ltWnBiR3hsWkZ3aUtUdGNjbHh1SUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnYm1GMlFtRnlMbU5zWVhOelRHbHpkQzVoWkdRb1hDSm1hV3hzWldSY0lpazdYSEpjYmlBZ0lDQmlkWEpuWlhJdVkyeGhjM05NYVhOMExtRmtaQ2hjSW1acGJHeGxaRndpS1R0Y2NseHVJQ0I5WEhKY2JuMHBPeUpkZlE9PSJ9