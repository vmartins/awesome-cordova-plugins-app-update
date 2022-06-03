var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var AppUpdateOriginal = /** @class */ (function (_super) {
    __extends(AppUpdateOriginal, _super);
    function AppUpdateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppUpdateOriginal.prototype.checkAppUpdate = function (updateUrl, options) { return cordova(this, "checkAppUpdate", { "callbackOrder": "reverse" }, arguments); };
    AppUpdateOriginal.pluginName = "AppUpdate";
    AppUpdateOriginal.plugin = "cordova-plugin-app-update";
    AppUpdateOriginal.pluginRef = "AppUpdate";
    AppUpdateOriginal.repo = "https://github.com/vaenow/cordova-plugin-app-update";
    AppUpdateOriginal.platforms = ["Android"];
    return AppUpdateOriginal;
}(AwesomeCordovaNativePlugin));
var AppUpdate = new AppUpdateOriginal();
export { AppUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLXVwZGF0ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFpRDdELDZCQUEwQjs7OztJQVV2RCxrQ0FBYyxhQUFDLFNBQWlCLEVBQUUsT0FBMEI7Ozs7OztvQkE1RDlEO0VBa0QrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwVXBkYXRlT3B0aW9ucyB7XG4gIGF1dGhUeXBlOiBzdHJpbmc7XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBBcHAgVXBkYXRlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc2VsZi11cGRhdGUgZm9yIGFuZHJvaWRcbiAqXG4gKiBAdXNhZ2VcbiAqXG4gKiBZb3Ugc2hvdWxkIGZpcnN0IGhvc3QgYW4gWE1MIGZpbGUgb24geW91ciBzZXJ2ZXIgd2l0aCB0aGUgZm9sbG93aW5nIGRhdGEgaW4gaXQ6XG4gKiBgYGB4bWxcbiAqIDx1cGRhdGU+XG4gKiAgICAgPHZlcnNpb24+MzAyMDQ4PC92ZXJzaW9uPlxuICogICAgIDxuYW1lPkFQSyBOYW1lPC9uYW1lPlxuICogICAgIDx1cmw+aHR0cHM6Ly95b3VyLXJlbW90ZS1hcGkuY29tL1lvdXJBcHAuYXBrPC91cmw+XG4gKiA8L3VwZGF0ZT5cbiAqIGBgYFxuICpcbiAqIFRoZW4gdXNlIHRoZSBmb2xsb3dpbmcgY29kZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBVcGRhdGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC11cGRhdGUnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwVXBkYXRlOiBBcHBVcGRhdGUpIHtcbiAqXG4gKiAgICBjb25zdCB1cGRhdGVVcmwgPSAnaHR0cHM6Ly95b3VyLXJlbW90ZS1hcGkuY29tL3VwZGF0ZS54bWwnO1xuICogICAgdGhpcy5hcHBVcGRhdGUuY2hlY2tBcHBVcGRhdGUodXBkYXRlVXJsKS50aGVuKCgpID0+IHsgY29uc29sZS5sb2coJ1VwZGF0ZSBhdmFpbGFibGUnKSB9KTtcbiAqXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBUaGUgcGx1Z2luIHdpbGwgY29tcGFyZSB0aGUgYXBwIHZlcnNpb24gYW5kIHVwZGF0ZSBpdCBhdXRvbWF0aWNhbGx5IGlmIHRoZSBBUEkgaGFzIGEgbmV3ZXIgdmVyc2lvbiB0byBpbnN0YWxsLlxuICogQGludGVyZmFjZXNcbiAqIEFwcFVwZGF0ZU9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBcHBVcGRhdGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHAtdXBkYXRlJyxcbiAgcGx1Z2luUmVmOiAnQXBwVXBkYXRlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92YWVub3cvY29yZG92YS1wbHVnaW4tYXBwLXVwZGF0ZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwVXBkYXRlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sgYW5kIHVwZGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXBkYXRlVXJsIHVwZGF0ZSBhcGkgdXJsXG4gICAqIEBwYXJhbSB7QXBwVXBkYXRlT3B0aW9uc30gW29wdGlvbnNdIG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgY2hlY2tBcHBVcGRhdGUodXBkYXRlVXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBBcHBVcGRhdGVPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn0iXX0=