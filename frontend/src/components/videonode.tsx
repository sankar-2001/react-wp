import * as ROSLIB from 'roslib';

export function VideoNode() {
  // Connecting to ROS
  // -----------------

  const ros = new ROSLIB.Ros({
    url: 'ws://172.28.0.3:9090'
  });

  ros.on('connection', () => {
    console.log('Connected to websocket server.');
    document.getElementById("status").innerHTML ="Connected";
  });

  ros.on('error', (error) => {
    console.log('Error connecting to websocket server: ', error);
    document.getElementById("status").innerHTML ="Error";
  });

  ros.on('close', () => {
    console.log('Connection to websocket server closed.');
    document.getElementById("status").innerHTML ="Closed";
  });

  // Publishing a Topic
  // ------------------

  const cmdVel = new ROSLIB.Topic({
    ros: ros,
    name: '/cmd_vel',
    messageType: 'geometry_msgs/Twist'
  });

  const twist = new ROSLIB.Message({
    linear: {
      x: 0.1,
      y: 0.2,
      z: 0.3
    },
    angular: {
      x: -0.1,
      y: -0.2,
      z: -0.3
    }
  });
  cmdVel.publish(twist);

  // Subscribing to a Topic
  // ----------------------

  const listener = new ROSLIB.Topic({
    ros: ros,
    name: '/listener',
    messageType: 'std_msgs/String'
  });

  listener.subscribe((message: ROSLIB.Message) => {
    console.log('Received message on ' + listener.name + ': ' + message.data);
    document.getElementById("msg").innerHTML = message.data;
    listener.unsubscribe();
  });

  // Calling a service
  // -----------------

  const addTwoIntsClient = new ROSLIB.Service({
    ros: ros,
    name: '/add_two_ints',
    serviceType: 'rospy_tutorials/AddTwoInts'
  });

  const request = new ROSLIB.ServiceRequest({
    a: 1,
    b: 2
  });

  addTwoIntsClient.callService(request, (result) => {
    console.log('Result for service call on '
      + addTwoIntsClient.name
      + ': '
      + result.sum);
  });

  // Getting and setting a param value
  // ---------------------------------

  ros.getParams((params) => {
    console.log(params);
  });

  const maxVelX = new ROSLIB.Param({
    ros: ros,
    name: 'max_vel_y'
  });

  maxVelX.set(0.8,()=>{
    console.log("set the value")
  });
  maxVelX.get((value) => {
    console.log('MAX VAL: ' + value);
  });

  return (
    <div>
      <h1>i am a simple video node   </h1>
      <p>Connection status: <span id="status"></span></p>
      <p>Last message received is: <span id="msg"></span></p>
    </div>
  );
}
