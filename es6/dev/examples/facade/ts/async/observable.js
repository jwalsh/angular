import { Observable } from 'rxjs/Rx';
var obs = new Observable((obs) => {
    var i = 0;
    setInterval(() => { obs.next(++i); }, 1000);
});
obs.subscribe(i => console.log(`${i} seconds elapsed`));
// #enddocregion
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtQVc3VWtUb2wudG1wL2FuZ3VsYXIyL2V4YW1wbGVzL2ZhY2FkZS90cy9hc3luYy9vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUNPLEVBQUMsVUFBVSxFQUFhLE1BQU0sU0FBUztBQUM5QyxJQUFJLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBUyxDQUFDLEdBQXVCO0lBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLFdBQVcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUMsQ0FBQztBQUNILEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUN4RCxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAjZG9jcmVnaW9uIE9ic2VydmFibGVcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaWJlcn0gZnJvbSAncnhqcy9SeCc7XG52YXIgb2JzID0gbmV3IE9ic2VydmFibGU8bnVtYmVyPigob2JzOiBTdWJzY3JpYmVyPG51bWJlcj4pID0+IHtcbiAgdmFyIGkgPSAwO1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7IG9icy5uZXh0KCsraSk7IH0sIDEwMDApO1xufSk7XG5vYnMuc3Vic2NyaWJlKGkgPT4gY29uc29sZS5sb2coYCR7aX0gc2Vjb25kcyBlbGFwc2VkYCkpO1xuLy8gI2VuZGRvY3JlZ2lvblxuIl19