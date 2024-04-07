const dragItem = document.querySelectorAll('.drag-item'); // เลือกทุก Element ที่มี class 'drag-item'
const dragList = document.querySelectorAll('.drag-item-list'); // เลือกทุก Element ที่มี class 'drag-item-list'

let selectItem; // ตัวแปรที่ใช้เก็บ Element ที่ถูกเลือก

// วนลูปผ่านทุก drag-item และเพิ่ม Event Listener สำหรับเหตุการณ์ dragstart
dragItem.forEach((item)=>{
    item.addEventListener('dragstart', ondragStart);
});

// วนลูปผ่านทุก drag-item-list และเพิ่ม Event Listener สำหรับเหตุการณ์ dragover, dragenter, และ drop
dragList.forEach((list)=>{
    list.addEventListener('dragover', onDragOver);
    list.addEventListener('dragenter', onDragEnter);
    list.addEventListener('drop', onDrop);
});

// เมื่อมีการ drop Element ลงใน drag-item-list
function onDrop() {
    this.append(selectItem); // เพิ่ม Element ที่ถูกเลือกเข้าไปในตำแหน่งนี้
    selectItem = null; // ล้างค่า selectItem ให้เป็น null เพื่อให้สามารถเลือก Element ใหม่ได้
}

// เมื่อเริ่มลาก Element
function ondragStart(){
    selectItem = this; // เก็บ Element ที่ถูกเลือกไว้ในตัวแปร selectItem
    console.log(selectItem); // แสดง Element ที่ถูกเลือกใน console
}

// เมื่อ Element ถูกลากเข้ามาใน drag-item-list
function onDragEnter(e){
    e.preventDefault(); // ป้องกันเกิดเหตุการณ์เรียกใช้ฟังก์ชันพื้นฐานของ drag-and-drop
}

// เมื่อ Element ถูกลากเหนือกับ drag-item-list
function onDragOver(e){
    e.preventDefault(); // ป้องกันเกิดเหตุการณ์เรียกใช้ฟังก์ชันพื้นฐานของ drag-and-drop
}

/* 
    dragover: เป็นเหตุการณ์ที่เกิดขึ้นเมื่อมีการลาก Element ไปเหนือบริเวณที่รับ Element อื่นๆ 
    (target zone) โดยฟังก์ชันที่ถูกเรียกจะป้องกันการดำเนินการเริ่มต้นของฟังก์ชันพื้นฐานของ 
    drag-and-drop เพื่อที่จะไม่เกิดผลกระทบที่ไม่ต้องการต่อการลาก Element นั้นๆ ไปวาง

    dragenter: เกิดขึ้นเมื่อ Element ที่ถูกลากเข้ามา อยู่ในพื้นที่ที่รับ Element อื่นๆ (drop zone) 
    ฟังก์ชันที่ถูกเรียกจะเป็นการป้องกันฟังก์ชันพื้นฐานของ drag-and-drop 
    เพื่อหยุดการดำเนินการที่ไม่ต้องการเมื่อ Element ถูกลากเข้ามาใน drop zone

    drop: เป็นเหตุการณ์ที่เกิดขึ้นเมื่อ Element ที่ถูกลากถูกวางลงใน drop zone 
    ฟังก์ชันที่ถูกเรียกจะทำการจัดการ Element ที่ถูกวางลงใน drop zone นั้นๆ 
    โดยทำการปรับเปลี่ยนโครงสร้างหรือเพิ่มคุณสมบัติของ Element ตามต้องการ

เหตุการณ์ทั้งสามนี้จะใช้ฟังก์ชัน e.preventDefault() เพื่อป้องกันพื้นฐานการทำงานของ drag-and-drop 
ที่ไม่ต้องการให้เกิดขึ้นในบางกรณี เช่น เมื่อ Element ถูกลากเข้ามาใน drop zone 
ไม่ต้องการให้มีการเรียกใช้การทำงานพื้นฐานของ drag-and-drop ที่อาจจะมีผลกระทบต่อการทำงานที่ไม่ถูกต้อง
*/