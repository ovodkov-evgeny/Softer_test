import React from "react";
import FileUploaderComponent from "./FileUploaderComponent";

const App = () => {
  // Ваш токен для доступа к Яндекс.диску
  const YANDEX_DISK_TOKEN = "YOUR_YANDEX_DISK_TOKEN";

  return (
    <div>
      <h1>Yandex Disk File Uploader</h1>
      <FileUploaderComponent token={YANDEX_DISK_TOKEN} />
    </div>
  );
};

export default App;
