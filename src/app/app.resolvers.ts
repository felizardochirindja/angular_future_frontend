import { inject } from '@angular/core';
import { NotificationsService } from 'app/layout/common/notifications/notifications.service';
import { ShortcutsService } from 'app/layout/common/shortcuts/shortcuts.service';
import { forkJoin } from 'rxjs';

export const initialDataResolver = () => {
    const notificationsService = inject(NotificationsService);
    const shortcutsService = inject(ShortcutsService);

    // Fork join multiple API endpoint calls to wait all of them to finish
    return forkJoin([
        notificationsService.getAll(),
        shortcutsService.getAll(),
    ]);
};
