import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from '..';
describe("Button.Group", function () {
  it("是否正确渲染", function () {
    var wrapper = TestRenderer.create(React.createElement(Button.Group, {
      size: "large"
    }, React.createElement(Button, null, "\u6309\u94AE\u4E00"), React.createElement(Button, null, "\u6309\u94AE\u4E8C")));
    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL19fdGVzdHNfXy9ncm91cC50ZXN0LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlRlc3RSZW5kZXJlciIsIkJ1dHRvbiIsImRlc2NyaWJlIiwiaXQiLCJ3cmFwcGVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLHFCQUF6QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsSUFBbkI7QUFFQUMsUUFBUSxDQUFDLGNBQUQsRUFBaUIsWUFBTTtBQUM3QkMsRUFBQUEsRUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ2pCLFFBQU1DLE9BQU8sR0FBR0osWUFBWSxDQUFDSyxNQUFiLENBQ2Qsb0JBQUMsTUFBRCxDQUFRLEtBQVI7QUFDRSxNQUFBLElBQUksRUFBQztBQURQLE9BR0Usb0JBQUMsTUFBRCw2QkFIRixFQUlFLG9CQUFDLE1BQUQsNkJBSkYsQ0FEYyxDQUFoQjtBQVFBQyxJQUFBQSxNQUFNLENBQUNGLE9BQUQsQ0FBTixDQUFnQkcsZUFBaEI7QUFDRCxHQVZDLENBQUY7QUFXRCxDQVpPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcidcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4nXG5cbmRlc2NyaWJlKFwiQnV0dG9uLkdyb3VwXCIsICgpID0+IHtcbiAgaXQoXCLmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPEJ1dHRvbi5Hcm91cFxuICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgPlxuICAgICAgICA8QnV0dG9uPuaMiemSruS4gDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uPuaMiemSruS6jDwvQnV0dG9uPlxuICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxufSlcbiJdfQ==