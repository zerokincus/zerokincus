// 処理の実行条件（プロセス管理のアクション判定）
(() => {
  'use strict';
  const eventType = 'app.record.detail.process.proceed';
  
  kintone.events.on(eventType, (event) => {
    const isTargetNextStatus = event.nextStatus.value === '承認';
    if (isTargetNextStatus) {
      window.alert('実行条件を満たしています');
    }
    return event;
  });
})();